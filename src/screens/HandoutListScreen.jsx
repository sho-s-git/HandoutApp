import React from 'react';
import {
  StyleSheet, View, Button,
} from 'react-native';

function HandoutListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="ViewHandout"
        onPress={() => navigation.navigate('ViewHandout')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HandoutListScreen;
