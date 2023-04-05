import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../themes/colors';

type InputProps = {
  field: {
    onChange: (value: string) => void;
    onBlur: () => void;
    value: string;
  };
  placeholder?: string;
  testID?: string;
};

const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 30px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.inputBorder};
  padding: 0 10px;
  font-size: 13px;
  color: ${colors.primary};
`;

const Input: React.FC<InputProps> = ({
  field: {onChange, onBlur, value},
  placeholder,
  testID,
}) => (
  <StyledTextInput
    onBlur={onBlur}
    onChangeText={onChange}
    value={value}
    autoCapitalize="none"
    autoCorrect={false}
    placeholder={placeholder}
    placeholderTextColor={colors.inputPlaceholder}
    testID={testID}
  />
);

export default Input;
