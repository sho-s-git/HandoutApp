import React from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function TopScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.serviceName}>おたより</Text>
        <Text style={styles.text}>はじめての方はこちら</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>新規登録</Text>
        </TouchableOpacity>
        <Text style={styles.text}>すでにアカウントをお持ちの方</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>ログイン</Text>
        </TouchableOpacity>
        <Text style={styles.text}>利用規約及びプライバシーポリシーに同意の上、登録又はログインへお進みください。</Text>
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 19,
  },
  serviceName: {
    marginVertical: 64,
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    lineHeight: 16,
  },
  buttonContainer: {
    borderColor: '#FF9900',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 16,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 4,
    paddingHorizontal: 80,
    color: '#FF9900',
  },
});

export default TopScreen;
