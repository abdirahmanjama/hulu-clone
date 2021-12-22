/* Contains all relevant stuff required to make requests to TMDB db */

//API KEY - required to access API - we pull this from environment variables
//Query parameters

//APIs a protocols that allow us t

const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week/?api_key=${API_KEY}&language=en-US`
    },
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week/?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: "Action",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMysteryMovies: {
        title: "Action",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=9648`
    },
    

}