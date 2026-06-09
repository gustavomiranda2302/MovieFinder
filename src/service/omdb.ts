import type { Movie } from "../types/movie";

interface OmdbResponse {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series";
  Poster: string;
}
export function omdbMapper(Response: OmdbResponse): Movie {
  return {
    title: Response.Title,
    year: Response.Year,
    imdbId: Response.imdbID,
    type: Response.Type,
    poster: Response.Poster,
  };
}
export async function fetchMovie(search: string): Promise<Movie> {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const url: string = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`erro http status:${response.status}`);
  }
  const data = await response.json();
  return omdbMapper(data);
}
