import React from 'react';
import {StatusBar} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen/SettingsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen/DetailScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

type RootStackParamList = {
  home: undefined;
  details: undefined;
  login: undefined;
};

type BottomTabParamList = {
  home: undefined;
  settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const homeTabNavigatorOptions: BottomTabNavigationOptions = {
  headerShown: false,
};
const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={homeTabNavigatorOptions}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

function App(): JSX.Element {
  const isLogged: boolean = false;

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        {isLogged ? (
          <Stack.Group>
            <Stack.Screen name="home" component={HomeTabNavigator} />
            <Stack.Screen name="details" component={DetailScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="login" component={LoginScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
