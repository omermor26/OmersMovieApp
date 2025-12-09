import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function MovieItem({ movie, isFavorite, onPress, onToggleFavorite}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {movie.imageUrl ?  (
                <Image source={{uri: movie.imageUrl}} style={styles.imagePoster} />
            ) : (
                <View style={[styles.imagePoster, styles.posterPlaceholder]}>
                    <Text style={styles.posterPlaceholderText}>No Image</Text>
                </View>
            )}

            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={2}>{movie.name}</Text>
                <Text style={styles.yearCategory}>{movie.year} | {movie.category}</Text>
                <Text style={styles.stars}>⭐ {movie.stars}</Text>
            </View>
            <TouchableOpacity onPress={onToggleFavorite} style={styles.starContainer}>
                <Text style={styles.star}>{isFavorite ? '★' : '☆'}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#1f1f1f',
        marginHorizontal: 16,
        marginBottom: 10,
        borderRadius: 8,
        alignItems: 'center',
      },
      imagePoster: {
        width: 70,
        height: 100,
      },
      posterPlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
      },
      posterPlaceholderText: {
        color: '#aaaaaa',
        fontSize: 12,
      },
      infoContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
      },
      title: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 4,
      },
      yearCategory: {
        color: '#aaaaaa',
        fontSize: 14,
      },
      stars: {
        color: '#ffdd55',
        marginTop: 4,
      },
      starContainer: {
        paddingHorizontal: 12,
      },
      star: {
        fontSize: 22,
        color: '#ffd700',
      },
})