import React from 'react';
import {StatusBar} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import {AuthProvider, useAuth} from './hooks/useAuth';
import {tweet} from './types';
import {colors} from './themes/colors';

type RootStackParamList = {
  main: undefined;
  details: {
    tweet: tweet;
    username: string | null;
  };
  login: undefined;
};

type BottomTabParamList = {
  home: undefined;
  settings: undefined;
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'details'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const homeTabNavigatorOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabelStyle: {
    fontWeight: '700',
    fontSize: 14,
  },
  tabBarItemStyle: {
    justifyContent: 'center',
  },
  tabBarIconStyle: {display: 'none'},
  tabBarActiveTintColor: colors.primary,
};

const appMainStackNavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={homeTabNavigatorOptions}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

const AppMainStack = () => {
  const {isLoggedIn} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={appMainStackNavigatorOptions}>
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="main" component={HomeTabNavigator} />
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
