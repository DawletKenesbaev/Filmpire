import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState: {
        genreOrCategoryName:'',
        pageNumber : 1,
        searchQuery:''
    },
    reducers:{
        selectGenreOrCategory: (state,action) =>{
            
            state.genreOrCategoryName =action.payload
        }
    }
})


export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer