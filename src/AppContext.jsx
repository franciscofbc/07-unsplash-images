import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const getInitialDarkMode = () => {
  const preferDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
  const storedDarkMode = localStorage.getItem('dark-theme') === 'true'
  return storedDarkMode || preferDarkMode
}

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchValue, setSearchValue] = useState('cat');

  useEffect(() => { document.body.classList.toggle('dark-theme', isDarkTheme) }, [isDarkTheme])

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // const body = document.querySelector('body');
    // body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('dark-theme', newDarkTheme)
  };

  return (
    <GlobalContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
