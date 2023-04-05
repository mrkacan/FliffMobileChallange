import React from 'react';
import styled from 'styled-components/native';

type ButtonProps = {
  children: string;
  onPress: () => void;
  testID?: string;
};

const StyledTouchableHighlight = styled.TouchableHighlight`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const StyledText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
`;

const Button: React.FC<ButtonProps> = ({children, onPress, testID}) => {
  return (
    <StyledTouchableHighlight onPress={onPress} testID={testID}>
      <StyledText>{children}</StyledText>
    </StyledTouchableHighlight>
  );
};

export default Button;
