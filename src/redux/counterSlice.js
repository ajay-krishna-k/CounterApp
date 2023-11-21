import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside this reducers key as objects
    reducers:{
        // logics/function to update state

        //function to increment number
        increment:(state ,action)=>{
            state.value +=action.payload
        },
        //function to decrement number
        decrement:(state ,action)=>{
            state.value -= action.payload
        },
        //function to decrement number
        reset:(state)=>{
            state.value = 0
        }
    }
})

//action is required by component inordet to update state
export const{increment,decrement,reset} = counterSlice.actions

//reducer is to change the state value
export default counterSlice.reducer