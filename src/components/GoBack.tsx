import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../themes/colors';

const StyledTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  margin: 10px 20px 5px 20px;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledArrow = styled.View`
  width: 9px;
  height: 9px;
  border-top-width: 2px;
  border-top-color: ${colors.primary};
  border-right-width: 2px;
  border-right-color: ${colors.primary};
  transform: rotate(-135deg);
`;

const StyledText = styled.Text`
  color: ${colors.primary};
  font-size: 15px;
  font-weight: 500;
  margin-left: 5px;
`;

const hitSlop = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20,
};
const GoBack: React.FC = () => {
  const navigation = useNavigation();
  return (
    <StyledTouchableOpacity
      onPress={navigation.goBack}
      activeOpacity={0.8}
      hitSlop={hitSlop}>
      <>
        <StyledArrow />
        <StyledText>Back</StyledText>
      </>
    </StyledTouchableOpacity>
  );
};

export default GoBack;
