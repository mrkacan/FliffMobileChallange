import React from 'react';
import styled from 'styled-components/native';

type ScreenProps = {
  children: React.ReactNode;
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Screen: React.FC<ScreenProps> = ({children}) => {
  if (!children) {
    return null;
  }
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
};

export default Screen;
