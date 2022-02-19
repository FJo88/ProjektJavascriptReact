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
        }
        //Använda filter och splice som detta exempel.
        // case DELETE_TODO: 
        //     const filteredTodos = state.todos.filter(todo => todo.id !==                                                                       action.payload)
        //     return { 
        //     ...state, 
        //     todos: filteredTodos
        // }
        // case INSERT_TODO: {
        //     const newArray = [...state.todos]; //Copying state array
        //     newArray.splice(2, 0, action.payload);
        //     //using splice to insert at an index
        //    return {
        //     ...state,
        //     todos: newArray //reassigning todos array to new array
        //     }
        //    }
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

export const {addCard, startApp} = cardListSlice.actions; 
 
export default  cardListSlice.reducer;