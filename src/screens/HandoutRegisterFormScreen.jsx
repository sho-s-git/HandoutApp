import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, TextInput, Image,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { func } from 'prop-types';

import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function SaveButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.saveContainer}>
      <Text style={styles.saveLabel}>保存</Text>
    </TouchableOpacity>
  );
}

SaveButton.propTypes = {
  onPress: func,
};

SaveButton.defaultProps = {
  onPress: null,
};

function HandoutRegisterFormScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveButton onPress={handlePress} />,
    });
  }, []);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  function handlePress() {
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore();
    (async () => {
      try {
        const docRef = await addDoc(collection(db, `users/${user.uid}/handouts`), {
          first: 'Ada',
          last: 'Lovelace',
          born: 1815,
        });
        console.log('Document written with ID: ', docRef.id);
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeTab' }],
        });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    })();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>画像</Text>
      <TouchableOpacity style={styles.imageButton}>
        <Text style={styles.imageLabel}>＋  画像を追加する</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <View style={styles.imageInner}>
          <Image
            style={styles.image}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonLabel}>削除</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageInner}>
          <Image
            style={styles.image}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonLabel}>削除</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.label}>タイトル</Text>
      <TextInput
        style={styles.titleInput}
        placeholder="タイトル"
      />
      <Text style={styles.label}>日付</Text>
      <TouchableOpacity style={styles.imageButton} onPress={showDatePicker}>
        <Text style={styles.imageLabel}>2022年09月15日</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text style={styles.label}>メモ</Text>
      <TextInput
        style={styles.memoInput}
        multiline
        placeholder="メモ"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  label: {
    fontSize: 16,
    lineHeight: 16,
    marginTop: 16,
    marginLeft: 19,
  },
  imageButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 48,
    justifyContent: 'center',
  },
  imageLabel: {
    fontSize: 16,
    marginLeft: 19,
  },
  imageContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-evenly',
    padding: 8,
  },
  imageInner: {
    alignItems: 'center',
  },
  image: {
    width: 136,
    height: 136,
    resizeMode: 'contain',
  },
  deleteButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF6666',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 32,
  },
  deleteButtonLabel: {
    fontSize: 16,
    color: '#FF6666',
    fontWeight: 'bold',
  },
  titleInput: {
    fontSize: 16,
    height: 48,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 19,
  },
  memoInput: {
    fontSize: 16,
    height: 136,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 19,
    textAlignVertical: 'top',
  },
  saveContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  saveLabel: {
    fontSize: 14,
    color: '#FF9900',
    fontWeight: 'bold',
  },
});

export default HandoutRegisterFormScreen;
