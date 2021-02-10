//setup data Layer
// we need this to track the basket

import React,{createContext,useContext,useReducer} from "react"

//This is the DATA Layer

export const Statecontext = createContext();

//Build a provider

export const StateProvider =({reducer,initialState,children})=>(
   <StateContext.Provider value ={useReducer(reducer,initialState)}>
       {children}
   </StateContext.Provider>

)