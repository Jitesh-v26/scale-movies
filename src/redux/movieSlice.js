import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: null,
        error: false,
        loading:true
    },
    reducers:{ 
        moviesLoading : (state) => {
            state.movies = null;
            state.error = false;
            state.loading = true;
        },
        moviesError : (state) => {
            state.movies = null;
            state.error = true;
            state.loading = false;
        },
        moviesData : (state, action) => {
            state.movies = action.payload;
            state.error = false;
            state.loading = false;
        }
    }

})

export default movieSlice;