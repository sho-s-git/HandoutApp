import React from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { getAuth, signOut } from 'firebase/auth';

import HandoutListScreen from './HandoutListScreen';
import HandoutRegisterScreen from './HandoutRegisterScreen';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

function handlePress() {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch(() => {
    // An error happened.
  });
}

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
          headerRight: () => (
            <TouchableOpacity style={styles.skipContainer} onPress={handlePress}>
              <Text style={styles.skipLabel}>ログアウト</Text>
            </TouchableOpacity>
          ),
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

const styles = StyleSheet.create({
  skipContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  skipLabel: {
    fontSize: 14,
    color: '#FF9900',
  },
});
