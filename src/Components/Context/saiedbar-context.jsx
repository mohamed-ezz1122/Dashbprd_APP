import { createContext, useReducer } from "react";
import sidebarReducer from "../reducer/sidebar-reducer.js";
import propTypes from "prop-types"


const initiolValus={
    isSidebarOpen:false
}

export const sidebarContext =createContext({})

export  const SidebarContextProvider=({children})=>{

    const [state,dispatch]=useReducer(sidebarReducer,initiolValus)
    // console.log(...state);
    const toggleSidebar=()=>{
        dispatch({
            type:"TOGGLE_SIDEBAR"
        })
    }
    return <sidebarContext.Provider value={{...state,toggleSidebar}}>
        {children}


    </sidebarContext.Provider>

}
SidebarContextProvider.propTypes={
    children:propTypes.node
}