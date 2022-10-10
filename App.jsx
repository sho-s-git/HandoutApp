import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet, TouchableOpacity, Text, LogBox,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './env';

import TopScreen from './src/screens/TopScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import HomeTab from './src/screens/HomeTab';
import HandoutRegisterFormScreen from './src/screens/HandoutRegisterFormScreen';
import HandoutRegisterScreen from './src/screens/HandoutRegisterScreen';
import ViewHandout from './src/screens/ViewHandout';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
getFirestore(app);

// Ignore log notification by message:
LogBox.ignoreLogs(['AsyncStorage has been extracted']);

const Stack = createNativeStackNavigator();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      setAppIsReady(true);
      if (_user) {
        console.log(_user.uid);
        setUser(_user);
      } else {
        setUser('');
      }
    });
    return unsubscribe;
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        initialRouteName="Top"
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerTintColor: '#FF9900',
          headerTitleStyle: {
            color: '#000000',
          },
          headerBackTitleVisible: false,
        }}
      >
        {user ? (
          <>
            <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
            <Stack.Screen name="HandoutRegisterForm" component={HandoutRegisterFormScreen} />
            <Stack.Screen name="HandoutRegister" component={HandoutRegisterScreen} />
            <Stack.Screen name="ViewHandout" component={ViewHandout} />

          </>
        ) : (
          <>
            <Stack.Screen
              name="Top"
              component={TopScreen}
              options={{
                title: '',
                headerRight: () => (
                  <TouchableOpacity style={styles.skipContainer}>
                    <Text style={styles.skipLabel}>スキップ</Text>
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: '新規登録' }} />
            <Stack.Screen name="LogIn" component={LogInScreen} options={{ title: 'ログイン' }} />
          </>
        )}
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
  skipLabel: {
    fontSize: 14,
    color: '#FF9900',
  },
});
