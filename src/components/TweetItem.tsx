import React from 'react';
import styled from 'styled-components/native';
import {calculateDateFromNow} from '../utils/helpers';
import Spacer from './Spacer';
import {colors} from '../themes/colors';

type TweetItemProps = {
  authorId: string | null;
  createdAt: string;
  text: string;
  image: string;
  showFullText?: boolean;
  onPress?: () => void;
};

const StyledTouchableHighlight = styled.TouchableOpacity`
  padding: 20px;
  border-bottom-width: ${({showFullText}: {showFullText: boolean}) => {
    return showFullText ? 0 : 1;
  }}px;
  border-bottom-color: ${colors.tweetSeparator};
`;

const StyledFullWidthView = styled.View`
  flex: 1;
`;

const StyledTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

const StyledAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const StyledUsername = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const StyledDate = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #646464;
`;

const StyledContent = styled.Text`
  font-size: 13px;
`;

const StyledShowMore = styled.Text`
  font-size: 13px;
  color: ${colors.primary};
`;

const TweetItem: React.FC<TweetItemProps> = ({
  authorId,
  text,
  image,
  createdAt,
  showFullText = false,
  onPress,
}) => {
  if (!authorId || !text || !image) {
    return null;
  }

  const showMore = !showFullText && text.length > 200;
  const content = showMore ? text.slice(0, 200) : text;
  return (
    <StyledTouchableHighlight
      showFullText={showFullText}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={showFullText}>
      <StyledTitleWrapper>
        <StyledAvatar source={{uri: 'https://picsum.photos/200/2'}} />
        <StyledFullWidthView>
          <StyledUsername>
            {`@${authorId} · `}
            <StyledDate>{calculateDateFromNow(createdAt)}</StyledDate>
          </StyledUsername>
          <Spacer height={7} />
          <StyledContent>
            {`${content}${showMore ? '... ' : ''}`}
            {showMore && <StyledShowMore>Show more</StyledShowMore>}
          </StyledContent>
          <Spacer height={7} />
          <StyledImage source={{uri: image}} />
        </StyledFullWidthView>
      </StyledTitleWrapper>
    </StyledTouchableHighlight>
  );
};

export default TweetItem;
