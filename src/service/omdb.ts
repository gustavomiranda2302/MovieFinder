import type { Movie } from "../types/movie";

interface OmdbResponse {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series";
  Poster: string;
}
export function omdbMapper(Response: OmdbResponse): Movie {
  const parseMovie = {} as Movie;

  return parseMovie;
}
