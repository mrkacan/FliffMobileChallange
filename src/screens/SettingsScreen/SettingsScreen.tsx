import React from 'react';
import {useAuth} from '../../hooks/useAuth';
import Screen from '../../components/Screen';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';

const SettingsScreen: React.FC = () => {
  const {username, logout} = useAuth();
  return (
    <Screen>
      <Container>
        <Title>Settings</Title>
        <Title>{username}</Title>
        <Button onPress={logout}>Logout</Button>
      </Container>
    </Screen>
  );
};

export default SettingsScreen;
