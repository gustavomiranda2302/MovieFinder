import type { Movie } from "../types/movie";

interface OmdbResponse {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series";
  Poster: string;
}
export function omdbMapper(Response: OmdbResponse[]): Movie[] {
  return Response.map((item) => ({
    title: item.Title,
    poster: item.Poster,
    imdbId: item.imdbID,
    type: item.Type,
    year: item.Year,
  }));
}
export async function fetchMovie(search: string): Promise<Movie[]> {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const url: string = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`erro http status:${response.status}`);
  }
  const data = await response.json();
  return omdbMapper(data.Search);
}
