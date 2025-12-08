import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const EXAMPLE_MOVIES = [
    {
        id: 1,
        name: 'Spiderman',
        stars: '4',
        year: '2003',
        category: 'action',
    },
    {
        id: 2,
        name: 'Grown ups',
        stars: '4.1',
        year: '2012',
        category: 'family',
    },
    {
        id: 3,
        name: 'Antman',
        stars: '3',
        year: '2018',
        category: 'action',
    },
];

export default function MovieListScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movies</Text>
            <FlatList 
                data={EXAMPLE_MOVIES} 
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => (
                    <Text>{item.name} | {item.year} | {item.stars} | {item.category}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    title: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingTop: 16,
        marginBottom: 8,
    },
});