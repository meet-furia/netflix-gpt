import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the scroll value as needed
        }
    };

    return (
        <div>
            <h1 className="bg-black text-xl text-white pt-4 pb-2 px-2 shadow-lg font-bold font-mono">{title}</h1>

            <div className="flex overflow-x-scroll bg-black no-scrollbar" ref={scrollRef}>
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MovieList;
