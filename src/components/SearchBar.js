import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({value, onChangeText}) {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Search movie" value={value} onChangeText={onChangeText} placeholderTextColor="#aaaaaa"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 14
    },
    input: {
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 9
    }
})