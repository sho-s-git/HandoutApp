import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';

function HandoutRegisterScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [picture, setPicture] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const cameraRef = useRef();

  // Create a root reference
  const storage = getStorage();

  // Create a reference to 'mountains.jpg'
  const storageRef = ref(storage, 'mountains.jpg');

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
      const { uri } = await cameraRef.current.takePictureAsync(options);
      if (uri) {
        setPicture(uri);
        console.log('picture source', uri);
      }
    }
  };

  const savePicture = async () => {
    const response = await fetch(picture);
    const blob = await response.blob();
    uploadBytesResumable(storageRef, blob).then((snapshot) => {
      setPicture(null);
      console.log('Uploaded a blob or file!');
    }).catch((error) => {
      console.log(error);
    });
  };

  const cancelPreview = () => {
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
      <TouchableOpacity onPress={savePicture}>
        <Ionicons name="save-outline" size={24} color="black" />
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
          // flashMode={Camera.Constants.FlashMode.on}
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

export default HandoutRegisterScreen;
