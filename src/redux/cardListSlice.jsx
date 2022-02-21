import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getHolder = createAsyncThunk("cardList/getHolder", async () => {
    let response = await fetch("https://randomuser.me/api/");
    let json = await response.json();
    return json;
})

const cardListSlice = createSlice({
    name: "cardList",
    initialState: {
        holder: {
            firstName:"",
            lastName:""
        }
        ,
        cards: [{
            id: Date.now(),
            cardnumber1: "1337",
            cardnumber2: "1337",
            cardnumber3: "1337",
            cardnumber4: "1337",
            holder:{
                firstName: "",
                lastName: ""
            },
            month: "3",
            year: "25",
            vendor: "visa",
            cvv: "666"
        }
    ],
        status: null,
        started: false
    },
    reducers: { 
        addCard: (state, {payload}) =>{
            state.cards.push(payload);
        },
        startApp: (state, {payload}) =>{
            state.started = payload;
        },
         deleteCard: (state, {payload}) =>{
            let filteredcards =  state.cards.filter((card) => card.id !== payload);
            return {...state , cards: filteredcards}
        },
        setActive: (state, {payload}) =>{
            let filteredcards =  state.cards.filter((card) => card.id !== payload.id);
            filteredcards.splice(0,0,payload);
            return{ ...state, cards: filteredcards}
            

        }
    },

    extraReducers: {

        [getHolder.fulfilled]: (state, {payload}) => {
            state.holder.firstName = payload.results[0].name.first.toUpperCase();
            state.cards[0].holder.firstName = payload.results[0].name.first.toUpperCase();
            state.holder.lastName = payload.results[0].name.last.toUpperCase();
            state.cards[0].holder.lastName = payload.results[0].name.last.toUpperCase();
            state.status = null;
        },
        [getHolder.pending]: (state) => {
            state.status = "Fetching holder. Please wait a moment...";
        },
        [getHolder.rejected]: (state) => {
            state.status = "Failed to fetch holder.";
    }
}

})

export const {addCard, startApp, deleteCard, setActive} = cardListSlice.actions; 
 
export default  cardListSlice.reducer;