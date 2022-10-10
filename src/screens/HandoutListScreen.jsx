import React from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function HandoutListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Image
          style={styles.image}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />
        <View style={styles.text}>
          <View>
            <Text
              style={styles.titleLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              幼稚園運動会
            </Text>
          </View>
          <View>
            <Text style={styles.dayLabel}>2022年09月01日</Text>
          </View>
          <View style={styles.member}>
            <View style={styles.memberInner}>
              <Ionicons name="square" size={16} color="#66FF00" />
              <Text style={styles.memberName}>こうくん</Text>
            </View>
            <View style={styles.memberInner}>
              <Ionicons name="square" size={16} color="#9900FF" />
              <Text style={styles.memberName}>れんくん</Text>
            </View>
          </View>
          <View style={styles.detail}>
            <Text
              style={styles.detailLabel}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよ
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.list}>
        <Image
          style={styles.image}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />
        <View style={styles.text}>
          <View>
            <Text
              style={styles.titleLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              幼稚園運動会
            </Text>
          </View>
          <View>
            <Text style={styles.dayLabel}>2022年09月01日</Text>
          </View>
          <View style={styles.member}>
            <View style={styles.memberInner}>
              <Ionicons name="square" size={16} color="#66FF00" />
              <Text style={styles.memberName}>こうくん</Text>
            </View>
            <View style={styles.memberInner}>
              <Ionicons name="square" size={16} color="#9900FF" />
              <Text style={styles.memberName}>れんくん</Text>
            </View>
          </View>
          <View style={styles.detail}>
            <Text
              style={styles.detailLabel}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよ
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  list: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  image: {
    width: 136,
    height: 136,
    resizeMode: 'contain',
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 8,
  },
  titleLabel: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  dayLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#999999',
  },
  member: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'start',
  },
  memberInner: {
    flexDirection: 'row',
  },
  memberName: {
    marginRight: 4,
    marginTop: 1,
    color: '#999999',
    fontSize: 16,
    lineHeight: 16,
  },
  detail: {
    marginTop: 8,
  },
  detailLabel: {
    fontSize: 16,
    lineHeight: 16,
    color: '#999999',
  },
});

export default HandoutListScreen;
