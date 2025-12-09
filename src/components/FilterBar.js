import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FilterBar({onAllPress, onYearPress, onFavoritePress}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onAllPress}>
                <Text style={styles.text}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onYearPress}>
                <Text style={styles.text}>By Year</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onFavoritePress}>
                <Text style={styles.text}>Favorite</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 11,
        paddingTop: 12,
        paddingBottom: 12,
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        marginHorizontal: 4,
        paddingVertical: 8,
        borderRadius: 6,
        backgroundColor: "#2a2a2a",
        alignItems: 'center',
    },
    text: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: 'bold',
    },
});
