import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesManager";

export const store = configureStore({
    reducer: {
    favorites: favoritesReducer,
    },
});
