import React, { createContext, useEffect, useState, ReactNode } from "react";

interface GlobalContextProps {
  openNavMenu: boolean;
  setOpenNavMenu: (val: boolean) => void;
  popupNewsletter: boolean;
  setPopupNewsletter: (val: boolean) => void;
  searchText: string;
  setSearchText: (val: string) => void;
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
  const [searchText, setSearchText] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        openNavMenu,
        setOpenNavMenu,
        popupNewsletter,
        setPopupNewsletter,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
