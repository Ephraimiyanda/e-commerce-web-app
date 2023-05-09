// Create a new file to handle API requests, e.g. api.js

const BASE_URL = 'http://localhost:8000';

export const fetchCustomerByEmailAndPassword = async (email, password) => {
  const response = await fetch(`${BASE_URL}/users?email=${email}&password=${password}`, { method: 'GET' });
  const customer = await response.json();
  return customer.length > 0 ? customer[0] : null;
};

export const fetchFarmerByEmailAndPassword = async (email, password) => {
  const response = await fetch(`${BASE_URL}/farmers?farmerEmail=${email}&farmerPassword=${password}`, { method: 'GET' });
  const farmer = await response.json();
  return farmer.length > 0 ? farmer[0] : null;
};


// Create a new file to store the global state, e.g. store.js

import { createContext, useContext, useReducer } from 'react';

const initialState = {
  customer: null,
  farmer: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CUSTOMER':
      return { ...state, customer: action.payload };
    case 'SET_FARMER':
      return { ...state, farmer: action.payload };
    default:
      return state;
  }
};

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setCustomer = (customer) => dispatch({ type: 'SET_CUSTOMER', payload: customer });
  const setFarmer = (farmer) => dispatch({ type: 'SET_FARMER', payload: farmer });
  return <StoreContext.Provider value={{ state, setCustomer, setFarmer }}>{children}</StoreContext.Provider>;
};

