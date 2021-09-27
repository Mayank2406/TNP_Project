import React,{ createContext, useContext, useReducer } from "react";
//data layer actually lives
export const StateContext=createContext();
export const StateProvider=({reducer,initialState,children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>
);
//pull information from data layout
export const useStateValue=()=>useContext(StateContext);