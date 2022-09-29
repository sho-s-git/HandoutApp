import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
import { firebaseConfig } from './env';

import HandoutRegister from './src/screens/HandoutRegister';
import HomeTab from './src/screens/HomeTab';
import ViewHandout from './src/screens/ViewHandout';

// Initialize Firebase
initializeApp(firebaseConfig);
console.log(firebaseConfig);

// // Initialize Cloud Storage and get a reference to the service
// const storage = getStorage(app);

// // Create a storage reference from our storage service
// const storageRef = ref(storage);

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
