import React from "react";
import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = (props) => {

    const [order, setOrder] = useState('market_cap_desc')
    const [page, setPage] = useState(1)

    const handleOnClick = (e) => {
        e.preventDefault()
        setOrder(e.target.value)

    }

    const nextPage = (e) => {
        e.preventDefault()
        setPage(page + 1)
    }

    const prevPage = (e) => {
        e.preventDefault()
        setPage(page <= 1 ? 1 : page - 1)
    }

    const value = {
        order: [order],
        page: [page, setPage],
        handleOnClick:handleOnClick,
        nextPage: nextPage,
        prevPage: prevPage
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}