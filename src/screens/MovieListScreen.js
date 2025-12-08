import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MovieItem from "../components/MovieItem";
import { fetchMovies } from "../api/moviesApi";


export default function MovieListScreen() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        try {
            const data = await fetchMovies();
            setMovies(data || []);
        } catch (e) {
            console.log(e);
        } 
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movies</Text>
            <FlatList 
                data={movies} 
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