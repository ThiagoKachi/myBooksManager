import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { BookDetail } from '../screens/BookDetail';
import { Resume } from '../screens/Resume';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <>
      <Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.border_dark,
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: {
            height: 88,
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          },
          tabBarButton: ['Details'].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
        })}
      >
        <Screen
          name="Details"
          component={BookDetail}
          initialParams={{ book: {} }}
        />
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Cadastrar"
          component={Register}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="book" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Resumo"
          component={Resume}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="bar-chart" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </>
  );
}
