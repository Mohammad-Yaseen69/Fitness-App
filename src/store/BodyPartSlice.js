import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [

    ]
}

const BodyPartSlice = createSlice({
    name : "BodyPart",
    initialState,
    reducers : {
        setBodyPart : (state,action) => {
            state.data = action.payload
        }
    }
})


export const {setBodyPart} = BodyPartSlice.actions
export default BodyPartSlice.reducer