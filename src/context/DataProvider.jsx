import { useState, useEffect, createContext} from "react"
import Data from '../data.js'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [produtos, setProdutos] =useState([])

    useEffect(() => {
        const produto = Data.items
        if (produto) {
            setProdutos(produto)
        }else {
            setProdutos(produto)
        }
    },[])

    const value = {
        produtos : [produtos]
    }
    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}

