import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';
import {colors} from '../themes/colors';

type LoaderProps = {
  loading: boolean;
};

const StyledView = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: ${colors.loaderOverlay};
  z-index: 1;
`;

const Loader: React.FC<LoaderProps> = ({loading}) => {
  if (!loading) {
    return null;
  }
  return (
    <StyledView>
      <ActivityIndicator size="large" color={colors.primary} />
    </StyledView>
  );
};

export default Loader;
