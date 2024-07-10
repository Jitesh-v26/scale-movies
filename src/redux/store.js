import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";

const store = configureStore({
    reducer: {
        moviesSlice: movieSlice.reducer,
    }
});

export default store;