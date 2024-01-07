import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => {
    return store.movies
  })
  return (
    <div>
      <div className='px-6 pb-10 bg-black'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies } />
      <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Top Rated"}
            movies={movies.topRatedMovies}
          />
          </div>
    </div>
  )
}

export default SecondaryContainer