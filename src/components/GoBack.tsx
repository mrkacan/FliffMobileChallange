import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const StyledTouchableHighlight = styled.TouchableHighlight`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const StyledArrow = styled.View`
  width: 10px;
  height: 10px;
  border-top-width: 2px;
  border-top-color: #ffffff;
  border-right-width: 2px;
  border-right-color: #ffffff;
  transform: rotate(-135deg);
  margin-right: -3px;
`;

const GoBack: React.FC = () => {
  const navigation = useNavigation();
  return (
    <StyledTouchableHighlight onPress={navigation.goBack}>
      <StyledArrow />
    </StyledTouchableHighlight>
  );
};

export default GoBack;
