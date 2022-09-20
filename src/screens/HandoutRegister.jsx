import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import Constants from 'expo-constants';

function HandoutRegister() {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#ffffff"
        leftComponent={{ icon: 'trash', type: 'feather', color: '#000' }}
        centerComponent={{ text: '登録/編集', style: { color: '#000', fontSize: 20, fontWeight: 'bold' } }}
        rightComponent={{ icon: 'search', type: 'feather', color: '#000' }}
      />
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

export default HandoutRegister;
