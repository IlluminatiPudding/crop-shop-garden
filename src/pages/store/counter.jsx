import { createSlice } from "@reduxjs/toolkit";

const counterSlice= createSlice({
    name:'counter',
    initialState: {counter:0},
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
    }
})



export const actions = counterSlice.actions;
export default counterSlice;