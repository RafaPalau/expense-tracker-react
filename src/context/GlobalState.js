import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//Initial state
const InitialState = {
  transactions: [
    { id: 1, text: 'Flores', amount: -20 },
    { id: 2, text: 'Salario', amount: 300 },
    { id: 3, text: 'Livros', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

//Create context
export const GlobalContext = createContext(InitialState);

//Provider component 
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  //Actions 
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions, 
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}