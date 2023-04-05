import React from 'react';
import styled from 'styled-components/native';

type ContainerProps = {
  children: React.ReactNode;
};

const StyledView = styled.View`
  margin: 25px;
`;

const Container: React.FC<ContainerProps> = ({children}) => {
  if (!children) {
    return null;
  }
  return <StyledView>{children}</StyledView>;
};

export default Container;
