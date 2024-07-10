import React, { useContext, useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import axios from 'axios';
import { MovieContext } from '../context/MovieContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesMiddleware } from '../redux/middleware/moviesMiddleware';

const Movies = () => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);
  const {movies, loading, error} = useSelector(store => store.moviesSlice);

  const {watchlist, setWatchlist, addToWatchlist, removeFromWatchlist} = useContext(MovieContext);

  useEffect(()=>{
    dispatch(fetchMoviesMiddleware(pageNo))
  },[pageNo]);

  

  const handleNext = () => {
    setPageNo(pageNo + 1);
  }

  const handlePrevious = () => {
    if(pageNo > 1){
      setPageNo(pageNo - 1);
    }
    
  }

  
  console.log(watchlist);

  const isAddedToWatchlist = (movie) =>{
    watchlist.forEach((x) => {
      if(x.id == movie.id) return true;
    })
  }

  if(loading){
    return(
      <div>Loading...</div>
        
    )
  }
  else if(error){
    return(
      <div>Error</div>
        
    )
  }
  else{
    return (
      <div>
        <div>
          <h1>
            Trending Movies
          </h1>
        </div>
        <div className='flex justify-evenly flex-wrap gap-8'>
          {
            movies.map(movie => {
              return (
                <MovieCard movie={movie} addToWatchlist={()=>addToWatchlist(movie)} watchlist={watchlist} removeFromWatchlist={removeFromWatchlist}/>
              )
            })
          }
        </div>
        <Pagination pageNumber={pageNo} nextPageFn={handleNext} previousPageFn={handlePrevious} />
      </div>
    )
  }
}

export default Movies