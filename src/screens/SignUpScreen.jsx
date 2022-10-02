import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.inputTitle}>メールアドレス</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="入力してください"
          textContentType="emailAddress"
        />
        <Text style={styles.inputTitle}>パスワード</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          placeholder="入力してください"
          secureTextEntry
          textContentType="password"
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('HomeTab')}>
          <Text style={styles.buttonLabel}>新規登録</Text>
        </TouchableOpacity>
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 8,
  },
  inputTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    backgroundColor: '#FF9900',
    borderRadius: 4,
    marginTop: 24,
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 4,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
