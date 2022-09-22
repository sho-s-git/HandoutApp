import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Constants from 'expo-constants';

function HandoutRegister() {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function toggleCameraType() {
    setType(
      type === CameraType.back
        ? CameraType.front
        : CameraType.back,
    );
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={{ flex: 1 }} type={type}>
        <View>
          <TouchableOpacity onPress={toggleCameraType}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
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
