import type { Movie } from "../types/movie";


interface MovieCardProps {
    movie: Movie;
}



export function MovieCard({ movie }: MovieCardProps) {
    return (
        <div>
            <span>{movie.title}</span>
            <img src={movie.poster} alt="poster do filme" />
        </div>

    )

}