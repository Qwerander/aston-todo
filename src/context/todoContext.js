import React from 'react';

export const todoContext = React.createContext();

export function TodoProvider({ children, value }) {
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}
