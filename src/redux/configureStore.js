import { configureStore } from "@reduxjs/toolkit";
import cardListSlice from "./cardListSlice"

const store = configureStore({
    reducer: {
        cardList: cardListSlice
    }
})
export default store;