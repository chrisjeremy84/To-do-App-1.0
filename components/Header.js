import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function Header(){
    return(
        <View style={styles.Header}>
        <Text style={styles.Title}>TODO</Text>
    </View>
    ) 
}

const styles = StyleSheet.create({
Header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: '#1f94bf',
},
Title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
}
});