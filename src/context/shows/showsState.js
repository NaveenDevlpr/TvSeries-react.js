import { useReducer,useContext } from "react";

import ShowsContext from "./showsContext";
import ShowReducer from "./showsReducer";

import { SEARCH_SHOWS,SET_LOADING,SET_SINGLE_SHOW,CLEAR_SINGLE_SHOW } from "../types";

import React from 'react'

const ShowsState = (props) => {

    const initialState={
        shows:[],
        singleShow:{},
        loading:false
    }

    const [state,dispatch]=useReducer(ShowReducer,initialState)

    const  searchShow=async(searchTerm)=>{
        dispatch({type:SET_LOADING})

        const data=await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`).then(res=>res.json())

        dispatch({type:SEARCH_SHOWS,
        payload:data})
    }

    const SetSingleShow=async(id)=>{
        dispatch({type:SET_LOADING})
        const data=await fetch(`https://api.tvmaze.com/shows/${id}`).then(res=>res.json())


        dispatch({
            type:SET_SINGLE_SHOW,
            payload:data
        })
    }


    const clearSingleShow=()=>{
        dispatch({
            type:CLEAR_SINGLE_SHOW
        })
    }

  return (
    <ShowsContext.Provider value={{
        shows:state.shows,
        singleShow:state.singleShow,
        loading:state.loading,
        SetSingleShow,
        searchShow,
        clearSingleShow,
        
    }}>
        {
            props.children
        }
    </ShowsContext.Provider>
  )
}

export default ShowsState