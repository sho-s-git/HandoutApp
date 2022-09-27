import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// import { initializeApp } from 'firebase/app';
// import { getStorage, ref } from 'firebase/storage';
// import { firebaseConfig } from '../../env';

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
// const storageRef = ref(storage);

function HandoutRegister() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [picture, setPicture] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 1.0, base64: true, skipProcessing: false };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        // await cameraRef.current.pausePreview();
        setPicture(source);
        console.log('picture source', source);
      }
    }
  };

  const cancelPreview = async () => {
    // await cameraRef.current.resumePreview();
    setPicture(null);
  };

  function toggleCameraType() {
    setCameraType(
      cameraType === CameraType.back
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

  const renderCaptureControl = () => (
    <View style={styles.inner}>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!isCameraReady}
        onPress={takePicture}
      >
        <Ionicons name="camera-outline" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleCameraType}>
        <Ionicons name="camera-reverse" size={40} color="black" />
      </TouchableOpacity>
    </View>

  );

  const renderCancelPreviewButton = () => (
    <View style={styles.inner}>
      <TouchableOpacity onPress={cancelPreview}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
    </View>

  );

  return (
    <SafeAreaView style={styles.container}>
      {!picture ? (
        <Camera
          ref={cameraRef}
          style={styles.camera}
          type={cameraType}
          flashMode={Camera.Constants.FlashMode.on}
          onCameraReady={onCameraReady}
          onMountError={(error) => {
            console.log('cammera error', error);
          }}
        />
      ) : (
        <Image source={{ uri: picture }} style={{ flex: 1 }} />
      )}
      {!picture && renderCaptureControl()}
      {picture && renderCancelPreviewButton()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
  },
  inner: {
    height: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default HandoutRegister;
