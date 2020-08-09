import React from 'react';
import { TabsConfig, FlashyTabBarItemConfig } from '@gorhom/animated-tabbar';
import { Icon } from 'native-base';
import { ViewStyle } from 'react-native';

import { ColorScheme } from '../../declaration/global.td';

const getTabsConfig = (colors: ColorScheme): TabsConfig<FlashyTabBarItemConfig> => ({
  Animes: {
    labelStyle: {
      color: colors.TEXT,
    },
    icon: {
      component: ({ color, size }) => <Icon name="activity" type="Feather" style={{ color, fontSize: size }} />,
      color: '#666',
    },
    indicator: {
      size: 4,
      color: '#5B37B7',
    },
  },
  Favorites: {
    labelStyle: {
      color: colors.TEXT,
    },
    icon: {
      component: ({ color, size }) => <Icon name="star" type="Feather" style={{ color, fontSize: size }} />,
      color: '#666',
    },
    indicator: {
      size: 4,
      color: '#C9379D',
    },
  },
});

const getTabBarOptions = (colors: ColorScheme, marginBottom: number): ViewStyle => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: 12,
  marginLeft: 12,
  marginRight: 12,
  marginBottom,
  backgroundColor: colors.CONTAINER,
  shadowColor: colors.CONTAINER,
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,

  elevation: 24,
});

export { getTabsConfig, getTabBarOptions };
