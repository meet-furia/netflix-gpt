import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = (movieId) => {

    const trailerVideo = useSelector(store => {

        return store.movies?.trailerVideo;
    })
    useMovieTrailer(movieId);
 
    return (

        <div>
            <iframe 
            className='w-full h-screen aspect-video '
            src={
                "https://www.youtube.com/embed/" +
                trailerVideo?.key +
                "?&loop=1&autoplay=1&mute=1&controls=0"
              } 
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen="allowFullScreen">
            </iframe>
        </div>
    )

}

export default VideoBackground



//  https://www.youtube.com/embed/1029575/rel=0version=3&autoplay=1&controls=0&&showinfo=0&loop=1