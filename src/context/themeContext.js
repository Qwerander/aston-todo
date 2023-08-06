import React from 'react';

export const themeContext = React.createContext();

export function ThemeProvider({ children, value }) {
  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
}
