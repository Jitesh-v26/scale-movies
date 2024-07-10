import movieSlice from "../movieSlice";

export const fetchMoviesMiddleware = (pageNo) => {
    const actions = movieSlice.actions;
    return async (dispatch) => {
        try{
            dispatch(actions.moviesLoading());
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=5a6e809a6376d537b15a7d290941d94b&language=en-US&page=${pageNo}`);
            if(!response.ok){
                throw new Error('API failed');
            }
            const movies = await response.json();
            
            console.log(movies);
            dispatch(actions.moviesData(movies.results));
        }catch (error){
            dispatch(actions.moviesError(error));
        }
    }
}