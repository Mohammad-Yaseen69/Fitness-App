import { configureStore } from "@reduxjs/toolkit";
import ExerciseSlice from "./ExerciseSlice";

const store = configureStore({
    reducer :{
        exercises : ExerciseSlice
    }
})

export default store