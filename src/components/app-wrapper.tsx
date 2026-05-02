"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface AppContextType {
  megaOpen: boolean;
  toggleMega: () => void;
  closeMega: () => void;
}

const AppContext = createContext<AppContextType>({
  megaOpen: false,
  toggleMega: () => {},
  closeMega: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [megaOpen, setMegaOpen] = useState(false);

  const toggleMega = useCallback(() => {
    setMegaOpen((prev) => !prev);
  }, []);

  const closeMega = useCallback(() => {
    setMegaOpen(false);
  }, []);

  return (
    <AppContext.Provider value={{ megaOpen, toggleMega, closeMega }}>
      {children}
    </AppContext.Provider>
  );
}
