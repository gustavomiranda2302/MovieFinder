import type { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";
interface MovieListProps {
    list: Movie[];

}

export function MovieList({ list }: MovieListProps) {
    return (
        <div>
            {list.map((movie) => (
                <MovieCard key={movie.imdbId} movie={movie} />
            ))}
        </div>

    );

}