import type { Movie } from "../types/movie";


interface MovieCardProps {
    movie: Movie;
}



export function MovieCard({ movie }: MovieCardProps) {
    return (
        <div>
            <img onError={(e) => e.currentTarget.src = 'public/placeholder.jpg'} src={movie.poster} alt="poster do filme" />
            <div>
                <p>{movie.title}</p>
                <p>{movie.type.charAt(0).toUpperCase() + movie.type.slice(1)}</p>
                <p>{movie.year}</p>
                <span> ID do filme no Imdb: {movie.imdbId}</span>
            </div>
        </div>

    )

}