import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MedicinaScreen from '../screens/medicina/MedicinaScreen';
import PoliciaScreen from '../screens/policia/PoliciaScreen';
import BomberoScreen from '../screens/bombero/BomberoScreen';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: colors.neutral.surface },
          tabBarActiveTintColor: colors.neutral.text,
          tabBarInactiveTintColor: colors.neutral.muted,
          headerStyle: { backgroundColor: colors.neutral.bg },
          headerTintColor: colors.neutral.text,
        }}
      >
        <Tab.Screen
          name="Medicina"
          component={MedicinaScreen}
          options={{
            tabBarLabel: 'Medicina',
            tabBarActiveTintColor: colors.medicina.primary,
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>🏥</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Policia"
          component={PoliciaScreen}
          options={{
            tabBarLabel: 'Policía',
            tabBarActiveTintColor: colors.policia.primary,
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>🚔</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Bombero"
          component={BomberoScreen}
          options={{
            tabBarLabel: 'Bombero',
            tabBarActiveTintColor: colors.bombero.primary,
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>🚒</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
