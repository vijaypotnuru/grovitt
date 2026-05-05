"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

interface AppContextType {
  megaOpen: boolean;
  toggleMega: () => void;
  closeMega: () => void;
  mobileNavOpen: boolean;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
}

const AppContext = createContext<AppContextType>({
  megaOpen: false,
  toggleMega: () => {},
  closeMega: () => {},
  mobileNavOpen: false,
  toggleMobileNav: () => {},
  closeMobileNav: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMega = useCallback(() => {
    setMegaOpen((prev) => !prev);
  }, []);

  const closeMega = useCallback(() => {
    setMegaOpen(false);
  }, []);

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen((prev) => !prev);
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const shouldLock = megaOpen || mobileNavOpen;
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [megaOpen, mobileNavOpen]);

  return (
    <AppContext.Provider
      value={{
        megaOpen,
        toggleMega,
        closeMega,
        mobileNavOpen,
        toggleMobileNav,
        closeMobileNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
