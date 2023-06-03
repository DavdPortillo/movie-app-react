// import { useEffect, useState } from "react";
// import { getMovies } from "../helpers/getMovies";


// export const useFetchMovies = (categories) => {
//     const [movies, setMovies] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
  
//     const getmovies = async () => {
//       const newMovie = await getMovies(categories);
//       setMovies(newMovie);
//       setIsLoading(false);
//     };
  
//     useEffect(() => {
//       getmovies();
//     }, []);
  
//     return {
//       movies,
//       isLoading,
//     };
//   };
  