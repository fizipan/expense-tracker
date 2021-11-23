import { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';

const intialState = {
  transactions: [],
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
