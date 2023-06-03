import { useEffect, useState } from 'react';
import { getMovies } from '../helpers/getMovies';
import { Film } from './Film';

export const ListFilms = ({ inputValue }) => {

  const [muvi, setMuvi] = useState([])

  const giveFilm = async () => {
    const movi = await getMovies(inputValue);
    setMuvi(movi)
  }

  useEffect(() => {
    if (inputValue) {
      giveFilm();
    }

  }, [inputValue])

  const hasMovies = muvi.length > 0

  return (
    <>
      {hasMovies ? (
        muvi.map((movie) => (
          <Film key={movie.id}{...movie} />
        ))
      ) : (
        <h3>No se encontraron películas</h3>
      )}
    </>
  );
}