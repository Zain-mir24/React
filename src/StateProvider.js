//setup data Layer
// we need this to track the basket

import React,{createContext,useContext,useReducer} from "react"

//This is the DATA Layer

export const StateContext = createContext();

//Build a provider
 const StateProvider =({reducer,initialState,children})=>(
   <StateContext.Provider value ={useReducer(reducer,initialState)}>
       {children}
   </StateContext.Provider>

)
//this is how we use it inside a component

export const useStatevalue= ()=>{
    useContext(StateContext)
}
export  {StateProvider}