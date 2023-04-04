import React from 'react';
import styled from 'styled-components/native';

type SpacerProps = {
  height: number;
};

const StyledView = styled.View<SpacerProps>`
  height: ${props => props.height}px;
`;

const Screen: React.FC<SpacerProps> = ({height}) => {
  if (!height) {
    return null;
  }
  return <StyledView height={height} />;
};

export default Screen;
