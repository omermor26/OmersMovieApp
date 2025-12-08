import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function MovieDetailsScreen({route}) {
    const {movie} = route.params;


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
              <Text style={styles.title}>{movie.name}</Text>
              <Text style={styles.yearCategory}>
                {movie.year} | {movie.category}
              </Text>
            </View>
          </View>
    
          <Text style={styles.rating}>Rating: {movie.stars} ⭐</Text>
          <Text style={styles.sectionTitle}>Description</Text>
          
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
  });