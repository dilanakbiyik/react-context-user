import React, {createContext, useContext, useReducer} from 'react';

interface ContextProps {}

export const StateContext =   React.createContext<Partial<ContextProps>>({});
export const StateProvider = ({reducer, initialState, children}: any) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext<any>(StateContext);
