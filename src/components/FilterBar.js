import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FilterBar({onSort}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onSort}>
                <Text style={styles.text}>By Year</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 12,
        paddingBottom: 12
    },
    button: {
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: "#2a2a2a",
        alignItems: 'center',
    },
    text: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: 'bold',
    },
});
