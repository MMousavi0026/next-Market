import { createSlice } from '@reduxjs/toolkit'

export const counterCart = createSlice({
    name: 'counterCart',
    initialState: 0,
    reducers: {
        increaseCounterCart: (state) => {
            state += 1;
            return state;
        },
        decreaseCounterCart: (state) => {
            state -= 1
            return state
        },
        increaseCartByAmount: (state, action) => {
            state += action.payload
            return state
        },
        decreaseCartByAmount: (state, action) => {
            state -= action.payload
            return state
        }
    },
})

export const {
    increaseCounterCart,
    decreaseCounterCart,
    increaseCartByAmount,
    decreaseCartByAmount
} = counterCart.actions
export default counterCart.reducer