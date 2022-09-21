import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HandoutRegister from './src/screens/HandoutRegister';
import HomeTab from './src/screens/HomeTab';
import ViewHandout from './src/screens/ViewHandout';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTab">
        <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
        <Stack.Screen name="HandoutRegister" component={HandoutRegister} />
        <Stack.Screen name="ViewHandout" component={ViewHandout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
