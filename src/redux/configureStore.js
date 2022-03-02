import { configureStore } from "@reduxjs/toolkit";
import cardListSlice from "./cardListSlice"
// Skapar store
const store = configureStore({
    reducer: {
        cardList: cardListSlice
    }
})
export default store;