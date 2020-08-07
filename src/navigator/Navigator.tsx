import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Detail, Home } from '../features';

type AuthStackParamList = {
  Home: undefined;
  Detail: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: 'Kitsu' }} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
