import { createContext, useContext } from 'react';

const SearchContext = createContext({});

export function useSearchContext() {
  const data = useContext(SearchContext);
  return data;
}

export default function SearchContextProvider({ children, value }) {
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
