
export async function fetchMovies() {
    const response = await fetch("https://www.inmanage.co.il/frontend/assignment/react-native");
    if (response.ok != true) {
        throw new Error("Network Error");
    }
    const data = await response.json();
    const movies = Object.keys(data).sort((a,b) => Number(a) - Number(b)).map((key) => data[key]);

    return movies;
}