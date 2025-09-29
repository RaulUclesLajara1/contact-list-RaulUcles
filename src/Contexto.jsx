import { useContext, useReducer, createContext } from "react";
import Contact_Reducer, {Initial_value} from "./store";

const StoreContext = createContext();


export function StoreProvider({ children }) {

    const [store, dispatch] = useReducer(Contact_Reducer, Initial_value());

    return (

        <StoreContext.Provider value={{ store, dispatch }}>

            {children}

        </StoreContext.Provider>

    );

};

export default function useGlobalReducer(){
    return useContext(StoreContext)
}