import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import MovieItem from "../components/MovieItem";
import { fetchMovies } from "../api/moviesApi";
import { useNavigation } from '@react-navigation/native';
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { selectFavoriteIds, toggleFavorite, setFavorites } from "../data/favoritesManager";
import { loadFavoritesFromStorage, saveFavoritesToStorage } from "../data/favoritesStorage";
import { useSelector, useDispatch } from "react-redux";

export default function MovieListScreen() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [movies, setMovies] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("ALL");
    const favoriteIds = useSelector(selectFavoriteIds);

    //first load of movies and favorites
    useEffect(() => {
        loadMovies();
        loadFavorites();
    }, []);

    //fetching the movie details using the api
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

    //for loading latest favorites
    const loadFavorites = async () => {
        const stored = await loadFavoritesFromStorage();
        dispatch(setFavorites(stored));
    }

    useEffect(() => {
        saveFavoritesToStorage(favoriteIds);
    }, [favoriteIds]);

    //handling error
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

    //handling loading elements
    if (loading) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.text}>loading...</Text>
            </View>
        );
    }

    //search logic
    const term = searchTerm.trim().toLowerCase();
    let displayedMovies = movies;
    if (term !== "") {
        displayedMovies = displayedMovies.filter((movie) => movie.name.toLowerCase().includes(term));
    }

    //filtering by year
    if (filterType === "BY_YEAR") {
        displayedMovies = [...displayedMovies].sort((a,b) => Number(a.year) - Number(b.year));
    }

    //filtering by favorites
    if (filterType === "FAVORITES") {
        displayedMovies = displayedMovies.filter((movie) => favoriteIds.includes(movie.id));
    }

    return (
        <View style={styles.container}>
            <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
            <FilterBar onAllPress={() => setFilterType("ALL")} onYearPress={() => setFilterType("BY_YEAR")} onFavoritePress={() => setFilterType("FAVORITES")}/>
            <FlatList 
                data={displayedMovies} 
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => {
                    const isFavorite = favoriteIds.includes(item.id);
                    return (
                        <MovieItem movie={item} isFavorite={isFavorite} onToggleFavorite={() => dispatch(toggleFavorite(item.id))} onPress={() => navigation.navigate('MovieDetails', { movie: item })}/>
                    );
                }}  
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