import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HeaderSearchButton } from '../components';
import { Detail, Search } from '../features';
import { Anime } from '../declaration/types.td';
import { createDynamicStyles } from '../styles/CommonStyles';
import { ViewStyle, TextStyle } from 'react-native';
import { ColorContext } from '../context/ColorContext';
import TabBarNavigator from './TabBarNavigator';

export type AuthStackParamList = {
  Home: undefined;
  Detail: { item: Anime };
  Search: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

function Navigator() {
  const { colors } = useContext(ColorContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: createDynamicStyles<ViewStyle>({
            backgroundColor: colors.CONTAINER,
            borderBottomColor: colors.DETAILS,
            shadowColor: 'transparent',
            borderBottomWidth: 1,
          }),
          headerTitleStyle: createDynamicStyles<TextStyle>({ color: colors.TEXT }),
        }}>
        <Stack.Screen
          name="Home"
          component={TabBarNavigator}
          options={{
            headerTitle: 'Kitsu',
            headerRight: () => <HeaderSearchButton />,
          }}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Search" component={Search} options={{ header: () => <></> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
