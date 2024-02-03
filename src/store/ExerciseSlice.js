import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [

    ]
}

const ExerciseSlice = createSlice({
    name : "Exercise",
    initialState,
    reducers : {
        setExercises : (state , action) => {
            state.data = action.payload
        },
        emptyExercises : (state) => {
            state.data = []
        }
    }
})

export default ExerciseSlice.reducer;
export const {setExercises , emptyExercises} = ExerciseSlice.actions