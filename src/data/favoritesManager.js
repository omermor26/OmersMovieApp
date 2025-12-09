import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: []
    },
    reducers: {
        setFavorites(state, action) {
            state.ids = action.payload || [];
        },
        toggleFavorite(state, action) {
            const movieId = action.payload;
            if (state.ids.includes(movieId)) {
                state.ids = state.ids.filter((id) => id !== movieId);
            } else {
                state.ids.push(movieId);
            }
        },
    },
});

export const { setFavorites, toggleFavorite } = favoritesSlice.actions;
export const selectFavoriteIds = (state) => state.favorites.ids;
export default favoritesSlice.reducer;
