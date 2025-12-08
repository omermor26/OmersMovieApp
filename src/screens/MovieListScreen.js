import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MovieItem from "../components/MovieItem";

const EXAMPLE_MOVIES = [
    {
        id: 1,
        name: 'Spiderman',
        stars: '4',
        year: '2003',
        category: 'action',
        imageUrl: "",
    },
    {
        id: 2,
        name: 'Grown ups',
        stars: '4.1',
        year: '2012',
        category: 'family',
        imageUrl: "",
    },
    {
        id: 3,
        name: 'Antman',
        stars: '3',
        year: '2018',
        category: 'action',
        imageUrl: "",
    },
];

export default function MovieListScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movies</Text>
            <FlatList 
                data={EXAMPLE_MOVIES} 
                keyExtractor={(item) => item.id} 
                contentContainerStyle={{paddingVertical: 8 }}
                renderItem={({item}) => (
                    <MovieItem movie={item} isFavorite={false} onPress={() => {}}/>
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