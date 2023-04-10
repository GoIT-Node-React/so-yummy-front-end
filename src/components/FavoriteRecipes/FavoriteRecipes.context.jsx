import { createContext, useContext } from 'react';

const FavoriteRecipesContext = createContext({});

export function useFavoriteRecipesContext() {
  const data = useContext(FavoriteRecipesContext);
  return data;
}

export default function FavoriteRecipesContextProvider({ children, value }) {
  return (
    <FavoriteRecipesContext.Provider value={value}>
      {children}
    </FavoriteRecipesContext.Provider>
  );
}
