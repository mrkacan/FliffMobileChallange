import React from 'react';
import styled from 'styled-components/native';

type TitleProps = {
  children: string | null;
  testID?: string;
};

const StyledText = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Title: React.FC<TitleProps> = ({children, testID}) => {
  return <StyledText testID={testID}>{children}</StyledText>;
};

export default Title;
