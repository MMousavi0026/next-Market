import { configureStore } from '@reduxjs/toolkit'
import counterCart from "./reducers/counterCart";
import counterBeloved from "./reducers/counterBeloved";

export default configureStore({
    reducer: {
        counterCart,
        counterBeloved,
    },
})