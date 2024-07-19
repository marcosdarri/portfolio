"use client";
import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext(undefined);

export function AppWrapper({ children }) {
  let [state, setState] = useState({ theme: true, language: true });
  return (
    <PortfolioContext.Provider value={{ state, setState }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function useAppContext() {
  return useContext(PortfolioContext);
}
