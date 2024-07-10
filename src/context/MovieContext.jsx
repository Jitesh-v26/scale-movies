import React, { useEffect, useState } from 'react'

export const MovieContext = React.createContext();

const MovieContextWrapper = ({children}) => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem('watchlist')){
            setWatchlist(JSON.parse(localStorage.getItem('watchlist')));
        }
    }, [])

    const addToWatchlist = (movie) => {
        const updatedWatchlist = [...watchlist, movie];
        setWatchlist(updatedWatchlist);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    }

    const removeFromWatchlist = (movie) => {
        const updatedWatchlist = watchlist.filter(x => x.id != movie.id);
        setWatchlist(updatedWatchlist);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    }


    return (
        <MovieContext.Provider value={{watchlist, setWatchlist, addToWatchlist, removeFromWatchlist}}>{children}</MovieContext.Provider>
    )
}

export default MovieContextWrapper;