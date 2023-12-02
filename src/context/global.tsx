import React, { createContext, useEffect, useState, ReactNode } from "react";

interface GlobalContextProps {
  openNavMenu: boolean;
  setOpenNavMenu: (val: boolean) => void;
  popupNewsletter: boolean;
  setPopupNewsletter: (val: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps,
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [popupNewsletter, setPopupNewsletter] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        openNavMenu,
        setOpenNavMenu,
        popupNewsletter,
        setPopupNewsletter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
