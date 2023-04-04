import React from 'react';
import styled from 'styled-components/native';

type TitleProps = {
  children: string | null;
};

const StyledText = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Title: React.FC<TitleProps> = ({children}) => {
  return <StyledText>{children}</StyledText>;
};

export default Title;
