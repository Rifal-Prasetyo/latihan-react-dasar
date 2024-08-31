import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';


// High Order Component(HOC)
// Berungsi untuk berganti path dari method milik Class component
// dalam hal ini dibutuhkan pada Home.jsx untuk me warp Routes dengan menambahakan NavigateProvider
export const NavigateContext = createContext();

export function NavigateProvider({ children }) {
  const navigate = useNavigate();
  return (
    <NavigateContext.Provider value={navigate}>
      {children}
    </NavigateContext.Provider>
  );
}
