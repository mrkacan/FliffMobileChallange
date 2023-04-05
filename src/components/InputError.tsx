import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../themes/colors';

type InputErrorProps = {
  children?: string;
  testID?: string;
};

//error message
const StyledText = styled.Text`
  font-size: 11px;
  color: ${colors.inputErrorText};
  margin: 10px 15px;
`;

const InputError: React.FC<InputErrorProps> = ({children, testID}) => {
  if (!children) {
    return null;
  }
  return <StyledText testID={testID}>{children}</StyledText>;
};

export default InputError;
