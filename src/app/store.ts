import { configureStore } from "@reduxjs/toolkit";
import genreOrCategoruReducer from '../features/currentGenreOrCategory';


export default configureStore({
    reducer:{
        currentGenreOrCategory:genreOrCategoruReducer
    }
})