import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HandoutListScreen from './HandoutListScreen';
import HandoutRegisterScreen from './HandoutRegisterScreen';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HandoutListScreen}
        options={{
          tabBarLabel: '一覧',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#FF9900',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name="HandoutRegister"
        component={HandoutRegisterScreen}
        options={{
          tabBarLabel: '追加',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#FF9900',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: '設定',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#FF9900',
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTab;
