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
