import React from 'react';
import {useRoute} from '@react-navigation/native';
import Screen from '../../components/Screen';
import TweetItem from '../../components/TweetItem';
import {DetailsScreenRouteProp} from '../../App';
import GoBack from '../../components/GoBack';
import {ScrollView} from 'react-native';

const DetailScreen: React.FC = () => {
  const route: DetailsScreenRouteProp = useRoute();

  const item = route?.params?.tweet;
  const username = route?.params?.username;
  return (
    <Screen>
      <ScrollView>
        <GoBack />
        <TweetItem
          authorId={username}
          createdAt={item?.created_at}
          text={item?.text}
          image={item?.image}
          showFullText
        />
      </ScrollView>
    </Screen>
  );
};

export default DetailScreen;
