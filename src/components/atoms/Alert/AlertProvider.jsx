import React, { createContext, useContext, useState } from 'react';

export const StateContext = createContext();
export const AlertProvider = ({ children }) => {
  const [alertItems, setAlertItems] = useState([]);

  const createAlert = ({ color = 'info', text = '', timeout = false }) => {
    const newItem = { color, text, timeout };
    setAlertItems([...alertItems, newItem]);
  };

  return (
    <StateContext.Provider value={{ alertItems, createAlert }}>{children}</StateContext.Provider>
  );
};
export const useAlert = () => useContext(StateContext);
