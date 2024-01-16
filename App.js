import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';


export default function App() {
  const appName= "My app";
  const [text , setText] = useState("")

  function changeTextHandler (onChangeText) {
    console.log('user is typing', onChangeText)
  };
  return (
    <View style={styles.container}>
      <Text>Welcom to the  </Text>
      <StatusBar style="auto" />
      <Header name = "HI,MY APP!"/>
      <TextInput value = {text} onChangeText={changeTextHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
