import React, { useState, createContext } from "react";

export const AirlinesContext = createContext();

export const AirlinesContextProvider = props => {
    const [airlines, setAirlines] = useState([]);

    const addAirlines = (airline) => {
        setAirlines([...airlines, airline]);
    };

    return (
        <AirlinesContext.Provider value={{ airlines, setAirlines, addAirlines }}>
            {props.children}
        </AirlinesContext.Provider>
    );
};