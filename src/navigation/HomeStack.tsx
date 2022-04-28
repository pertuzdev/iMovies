import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {HomeStackParamList} from './HomeStack.types';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
