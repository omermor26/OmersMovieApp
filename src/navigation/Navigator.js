import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import MovieListScreen from "../screens/MovieListScreen";

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: "#1f1f1f"},
            headerTintColor: "#ffffff",
            headerTitleStyle: {fontWeight: 'bold'}
        }}>
            <Stack.Screen name="MovieList" component={MovieListScreen} options={{title: "Movies"}}/>
            <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{title: "Movie Details"}}/>
        </Stack.Navigator>
    );
}