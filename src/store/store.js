import { configureStore } from "@reduxjs/toolkit";
import ExerciseSlice from "./ExerciseSlice";
import BodyPartSlice from "./BodyPartSlice";

const store = configureStore({
    reducer :{
        exercises : ExerciseSlice,
        bodyPart : BodyPartSlice
    }
})

export default store