import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MovieListScreen from './MovieListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <MovieListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
