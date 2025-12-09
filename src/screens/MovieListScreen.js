import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import MovieItem from "../components/MovieItem";
import { fetchMovies } from "../api/moviesApi";
import { useNavigation } from '@react-navigation/native';
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";


export default function MovieListScreen() {
    const navigation = useNavigation();

    const [movies, setMovies] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(true);
    
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        try {
            setErrorMsg("");
            setLoading(true);
            const data = await fetchMovies();
            setMovies(data || []);
        } catch (e) {
            console.log(e);
            setErrorMsg("Error fetching movies");
        } finally {
            setLoading(false);
        }
    }

    if (errorMsg) {
        return (
            <View style={[styles.container, styles.center]}>
                <Text style={styles.text}>{errorMsg}</Text>
                <TouchableOpacity style={styles.tryAgain} onPress={loadMovies}>
                    <Text style={styles.tryAgainText}>try again</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (loading) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.text}>loading...</Text>
            </View>
        );
    }

    const term = searchTerm.trim().toLowerCase();
    let displayedMovies = movies;

    if (term !== "") {
        displayedMovies = displayedMovies.filter((movie) => movie.name.toLowerCase().includes(term));
    }

    if (filter) {
        displayedMovies = [...displayedMovies].sort((a,b) => Number(a.year) - Number(b.year));
    }

    return (
        <View style={styles.container}>
            <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
            <FilterBar onSort={() => setFilter(true)}/>
            <FlatList 
                data={displayedMovies} 
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => (
                    <MovieItem movie={item} isFavorite={false} onPress={() => navigation.navigate('MovieDetails', { movie: item })}/>
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
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#ffffff",
        fontSize: 16,
        marginTop: 8,
        marginBottom: 8
    },
    tryAgain: {
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: "#2a2a2a",
    },
    tryAgainText: {
        color: "#ff0000",
        fontSize: 14,
    },
});