import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';

export default function AddTodo({submitHandler}){

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='Add Task'
            onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='ADD' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        fontSize: 20
    }
})