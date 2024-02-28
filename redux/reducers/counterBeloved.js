import {createSlice} from "@reduxjs/toolkit";

export const counterBeloved = createSlice({
    name: 'counterBeloved',
    initialState: 0,
    reducers: {
        increaseCounterBeloved: (state) => {
            state++;
            return state;
        },
        decreaseCounterBeloved: (state) => {
            state--;
            return state;
        },
    }
})

export const {
    increaseCounterBeloved,
    decreaseCounterBeloved,
} = counterBeloved.actions;

export default counterBeloved.reducer