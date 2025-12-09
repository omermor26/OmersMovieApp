import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "FAVORITE_MOVIES_IDS";

export async function loadFavoritesFromStorage() {
    try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (!json) return [];
        return JSON.parse(json);
    } catch (e) {
        console.log("Failed to load favorites", e);
        return [];
    }
}

export async function saveFavoritesToStorage(favoriteIds) {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch (e) {
        console.log("Failed to save favorites", e);
    }
}
