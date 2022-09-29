import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './env';

import HomeTab from './src/screens/HomeTab';
import TopScreen from './src/screens/TopScreen';
import HandoutRegisterScreen from './src/screens/HandoutRegisterScreen';
import ViewHandout from './src/screens/ViewHandout';

// Initialize Firebase
initializeApp(firebaseConfig);
console.log(firebaseConfig);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Top"
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Top"
          component={TopScreen}
          options={{
            title: '',
            headerRight: () => (
              <TouchableOpacity style={styles.skipContainer}>
                <Text style={styles.skipContainer}>スキップ</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
        <Stack.Screen name="HandoutRegister" component={HandoutRegisterScreen} />
        <Stack.Screen name="ViewHandout" component={ViewHandout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  skipContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  skipContainer: {
    fontSize: 14,
    color: '#FF9900',
  },
});
