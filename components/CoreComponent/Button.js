import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, style, text, uppercase, textStyle}) => {

    const caseStyle = uppercase?'uppercase':'capitalize';

    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={[styles.text, {textTransform: caseStyle}, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#337bff',
        paddingVertical: 10,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
    }
})

export default Button;