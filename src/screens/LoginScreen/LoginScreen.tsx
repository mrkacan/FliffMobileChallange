import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import useUserMockApi from '../../hooks/useMockApi/useUserMockApi';
import {useAuth} from '../../hooks/useAuth';
import {validations} from '../../utils/validations';
import Input from '../../components/Input';
import Screen from '../../components/Screen';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import InputError from '../../components/InputError';

const LoginScreen: React.FC = () => {
  const {getUserStatus} = useUserMockApi();
  const {login} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    reValidateMode: 'onSubmit',
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = ({username}: {username: string}) => {
    login(username);
  };

  return (
    <Screen>
      <Container>
        <Spacer height={20} />
        <Title testID="loginWelcomeText">
          To get started, first enter your @username
        </Title>
        <Controller
          name="username"
          control={control}
          rules={{
            required: 'Username is required',
            validate: {
              length: validations.username.length,
              validCharacters: validations.username.validCharacters,
              notTwitterOrAdmin: validations.username.notTwitterOrAdmin,
              isUserAvailableForLogin: value =>
                validations.username.isUserAvailableForLogin(
                  getUserStatus(value),
                ),
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              field={{onChange, onBlur, value}}
              placeholder="Username"
              testID="loginInput"
            />
          )}
        />
        {errors.username && (
          <InputError testID="loginErrorText">
            {errors.username.message}
          </InputError>
        )}
        <Spacer height={20} />
        <Button testID="loginButton" onPress={handleSubmit(onSubmit)}>
          Log in
        </Button>
        <Spacer height={20} />
      </Container>
    </Screen>
  );
};

export default LoginScreen;
