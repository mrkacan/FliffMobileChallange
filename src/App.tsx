import React from 'react';
import {StatusBar} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import {AuthProvider, useAuth} from './hooks/useAuth';

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

const AppMainStack = () => {
  const {isLoggedIn} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
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
};

function App(): JSX.Element {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      <AppMainStack />
    </AuthProvider>
  );
}

export default App;
