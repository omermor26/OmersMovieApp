import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchMovieById } from '../api/moviesApi';

export default function MovieDetailsScreen({route}) {
    const {movie} = route.params;
    const [movieDetails, setMovieDetails] = useState(movie);
    const [loadingDetails, setLoadingDetails] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    const loadDetails = async () => {
        try {
            setLoadingDetails(true);
            setErrorMsg('');
            const data = await fetchMovieById(movie.id);
            setMovieDetails(data);
        } catch (err) {
            console.log("Failed to load movie details", err);
            setErrorMsg("Error loading movie details");
        } finally {
            setLoadingDetails(false);
        }
    };
    
    useEffect(() => {
        loadDetails();
    }, [movie.id]);

    const desc = movieDetails.description && movieDetails.description.trim().length > 0 ? movieDetails.description : "No description";

    return (
        <ScrollView style={styles.container}>
            {movie.imageUrl ? (
                <Image source={{uri: movie.imageUrl}} style={styles.imagePoster}/>
            ) : (
                <View style={[styles.poster, styles.posterPlaceholder]}>
                    <Text style={styles.posterPlaceholderText}>No Image</Text>
                </View>
            )}
    
            <View style={styles.headerRow}>
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{movieDetails.name}</Text>
                    <Text style={styles.yearCategory}> {movieDetails.year} | {movieDetails.category}</Text>
                </View>
            </View>
    
            <Text style={styles.rating}>Rating: {movieDetails.stars} ⭐</Text>

            {loadingDetails ? (
                <View style={styles.center}>
                    <ActivityIndicator size="large" color="#ffffff" />
                    <Text style={styles.loadingText}>Loading movie details...</Text>
                </View>
            ) : errorMsg ? (
                <View style={styles.center}>
                    <Text style={styles.errorText}>{errorMsg}</Text>
                    <TouchableOpacity style={styles.tryAgain} onPress={loadDetails}>
                        <Text style={styles.tryAgainText}>try again</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>{desc}</Text>
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    imagePoster: {
        width: '100%',
        height: 300,
    },
    posterPlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#333333",
    },
    posterPlaceholderText: {
        color: "#aaaaaa",
    },
    headerRow: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 16,
        alignItems: 'center',
    },
    title: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: 'bold',
    },
    yearCategory: {
        color: "#cccccc",
        marginTop: 4,
    },
    rating: {
        color: "#ffffff",
        paddingHorizontal: 16,
        marginTop: 8,
    },
    sectionTitle: {
        color: "#ffffff",
        fontSize: 18,
        marginTop: 16,
        paddingHorizontal: 16,
        fontWeight: 'bold',
    },
    description: {
        color: "#ffffff",
        paddingHorizontal: 16,
        paddingVertical: 8,
        lineHeight: 20,
    },  center: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    },
    loadingText: {
        color: "#ffffff",
        marginTop: 8,
    },
    errorText: {
        color: "#ff8080",
        textAlign: 'center',
        marginBottom: 8,
    },
    tryAgain: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: "#2a2a2a",
    },
    tryAgainText: {
        color: "#ffffff",
        fontSize: 14,
    },
    sectionTitle: {
        color: "#ffffff",
        fontSize: 18,
        marginTop: 16,
        paddingHorizontal: 16,
        fontWeight: 'bold',
    },
});