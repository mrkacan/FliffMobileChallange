import React from 'react';
import styled from 'styled-components/native';

type InputProps = {
  field: {
    onChange: (value: string) => void;
    onBlur: () => void;
    value: string;
  };
  placeholder?: string;
};

const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 30px;
  border-bottom-width: 1px;
  border-bottom-color: #c9c9c9;
  padding: 0 10px;
  font-size: 13px;
  color: #3f88de;
`;

const Input: React.FC<InputProps> = ({
  field: {onChange, onBlur, value},
  placeholder,
}) => (
  <StyledTextInput
    onBlur={onBlur}
    onChangeText={onChange}
    value={value}
    autoCapitalize="none"
    autoCorrect={false}
    placeholder={placeholder}
    placeholderTextColor={'#868686'}
  />
);

export default Input;
