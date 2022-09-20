import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HandoutListScreen from './src/screens/HandoutListScreen';
import HandoutRegister from './src/screens/HandoutRegister';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HandoutListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HandoutRegister" component={HandoutRegister} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
