import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useTweetMockApi from '../../hooks/useMockApi/useTweetMockApi';
import Screen from '../../components/Screen';
import Loader from '../../components/Loader';
import TweetItem from '../../components/TweetItem';
import {useAuth} from '../../hooks/useAuth';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const {data, fetchData, loading, hasMore, error} = useTweetMockApi();
  const {username} = useAuth();

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleEndReached = () => {
    if (hasMore) {
      fetchData();
    }
  };

  if (error) {
    return (
      <Screen>
        <Text>Something went wrong</Text>
      </Screen>
    );
  }

  return (
    <Screen testID="homeScreen">
      <Loader loading={loading} />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TweetItem
              onPress={() => {
                navigation.navigate('details', {
                  tweet: item,
                  username,
                });
              }}
              authorId={username}
              createdAt={item.created_at}
              text={item.text}
              image={item.image}
            />
          );
        }}
        keyExtractor={item => `tweet-${item.id}`}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
      />
    </Screen>
  );
};

export default HomeScreen;
