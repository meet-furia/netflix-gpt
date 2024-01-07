import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    console.log(movieId)
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
      
 + 1029575 +
      "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data?.json();


      const filterData = json?.results?.filter((video) => video.type === "Trailer");
      const trailer = filterData?.length ? filterData[0] : json.results[0];
      console.log('Trailer:', trailer); // Log trailer
      dispatch(addTrailerVideo(trailer));
     // Handle the case where there's no valid data in the API response
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;