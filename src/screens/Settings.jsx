import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

function Settings() {
  return (
    <View style={styles.container}>
      <Text>sample</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

export default Settings;
