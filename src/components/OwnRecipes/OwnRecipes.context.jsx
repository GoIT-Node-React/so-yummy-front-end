import { createContext, useContext } from 'react';

const OwnRecipesContext = createContext({});

export function useOwnRecipesContext() {
  const data = useContext(OwnRecipesContext);
  return data;
}

export default function OwnRecipesContextProvider({ children, value }) {
  return (
    <OwnRecipesContext.Provider value={value}>
      {children}
    </OwnRecipesContext.Provider>
  );
}
