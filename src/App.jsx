import { ListFilms } from "./components/ListFilms"
import { Input } from "./components/Input"
import { useState } from "react"
import './app.css'

export const App = () => {
  const [movie, setMovie] = useState("");

  const addMovie = (newMovie) => {
    setMovie(newMovie);
  }
  
  return (
    <>
      <div className="container">
        <div className="header">
          <Input outInputValue={addMovie} />
        </div>
        <div className="listFilm">
          <ListFilms inputValue={movie} />
        </div>
      </div>
    </>
  )
}
