const API_KEY = ' 7c9231aa6a515d5702c48e2dd1bb8f6f'
const ExampleKey = 'https://api.themoviedb.org/3/movie/550?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f'

const requests={
    fetchTrending:`/trending/all/week?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f&with_genres=99`

}

export default requests

///https://api.themoviedb.org/3/discover/tv?api_key=7c9231aa6a515d5702c48e2dd1bb8f6f&with_network=213