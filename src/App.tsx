import { useState } from "react";
import type { Movie } from "./types/movie"
import { SearchBar } from "./components/SearchBar"
import { MovieList } from "./components/MovieList"
import { fetchMovie } from "./service/omdb";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  async function handleSearch(s: string) {
    setLoading(true);
    try {
      const result = await fetchMovie(s);
      setMovies([result]);
    } catch (error) {
      setError("filme nao encontrado")

    } finally {
      setLoading(false)
    }



  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <span> Carregando...</span>}
      {!loading && error != null && <span>{error}</span>}
      {!loading && error == null && <MovieList list={movies} />}

    </div>
  )
}

export default App
