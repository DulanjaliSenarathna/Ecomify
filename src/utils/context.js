import {createContext, useState} from 'react';

export const Context = createContext();

const AppContext = ({children}) =>{
    return <Context.Provider value={""}>{children}</Context.Provider>
    
};

export default AppContext;