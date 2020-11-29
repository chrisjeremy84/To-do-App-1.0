import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  
  const [name, setName] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.TextWelcome}>Welcome</Text>
      <TextInput 
      styles={styles.input}
      placeholder='Input name please'
      onChangeText={(val) => setName(val)}
      />
      <View style ={styles.Btn} >
      <Text style ={styles.TextStyle} >Connect</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#000000',
  alignItems: 'center'
  },
  input: {
    backgroundColor: '#ffff',
    fontSize: 14,
    color: '#fff',
    borderWidth: 2,
    borderColor : '#fff',
    borderRadius: 4,
    height: 25,
    width: 200,
    padding: 8,
    margin: 10
  },
  Btn: {
    marginTop: 400,
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: '#e35252',
    borderRadius: 5
    
  },
  TextStyle: {
    padding: 5,
    fontSize: 30 ,
    fontWeight: 'bold',
    color: '#f2ebeb',
    textAlign: 'center'
  },
  TextWelcome: {
    padding: 80,
    fontSize: 40 ,
    fontWeight: 'bold',
    color: '#f2ebeb',
    textAlign: 'center'
  }
});
