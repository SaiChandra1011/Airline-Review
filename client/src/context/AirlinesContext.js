import React, {useState, createContext} from "react";


export const AirlinesContext = createContext();

export const AirlinesContextProvider = props => {
 const [airlines, setAirlines] = useState([]) 

    return (
        <AirlinesContext.Provider value={{airlines,setAirlines}}>
            {props.children}
        </AirlinesContext.Provider>
    )
}

