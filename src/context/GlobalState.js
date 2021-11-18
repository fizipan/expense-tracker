import { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';

const intialState = {
  transactions: [
    {
      date: new Date().getTime(),
      name: 'Flower',
      action: 'expenditure',
      value: 100000,
    },
    {
      date: new Date().getTime(),
      name: 'Salary',
      action: 'income',
      value: 2000000,
    },
    {
      date: new Date().getTime(),
      name: 'Book',
      action: 'expenditure',
      value: 10000,
    },
    {
      date: new Date().getTime(),
      name: 'Camera',
      action: 'expenditure',
      value: 1000000,
    },
  ],
};

// Create context
export const GlobalContext = createContext(intialState);

// Provider componenent
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, intialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
