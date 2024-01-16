import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomHeader from './components/Header';

export default function Header(props) {
  return (
    <View>
      <Text>Header name is {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
