import type { Movie } from "../types/movie";


interface MovieCardProps {
    movie: Movie;
}



export function MovieCard({ movie }: MovieCardProps) {
    return (
        <div>
            <img src={movie.poster} alt="poster do filme" />
            <div>

                <p>{movie.type}</p>
                <span>{movie.imdbId}</span>
            </div>
        </div>

    )

}