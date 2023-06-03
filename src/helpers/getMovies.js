

const apikey = 'http://www.omdbapi.com/?apikey=2835fbb4&s=matrix'


export const getMovies = async (categories = "Interstellar") => {
    const url = `http://www.omdbapi.com/?apikey=2835fbb4&s=${categories}`
    const response = await fetch(url);
    const { Search } = await response.json();

    const movies = Search.map((movies) => ({
        id: movies.imdbID,
        title: movies.Title,
        year: movies.Year,
        image: movies.Poster,

    }));

    return movies;
};




