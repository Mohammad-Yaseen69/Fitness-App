import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [

    ],
    loading : true
}

const ExerciseSlice = createSlice({
    name : "Exercise",
    initialState,
    reducers : {
        setExercises : (state , action) => {
            state.data = action.payload
            state.loading = false
        },
        emptyExercises : (state) => {
            state.data = []
            state.loading = true
        },
    }
})

export default ExerciseSlice.reducer;
export const {setExercises , emptyExercises} = ExerciseSlice.actions