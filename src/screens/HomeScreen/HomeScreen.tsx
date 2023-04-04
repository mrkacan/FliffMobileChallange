import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('details')}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
