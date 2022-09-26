import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function ViewHandout() {
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
  },
});

export default ViewHandout;
