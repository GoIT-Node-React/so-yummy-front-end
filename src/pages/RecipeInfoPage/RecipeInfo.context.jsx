import { createContext, useContext } from 'react';

const RecipeInfoContext = createContext({});

export function useRecipeInfoContext() {
  const data = useContext(RecipeInfoContext);
  return data;
}

export default function RecipeInfoContextProvider({ children, value }) {
  return (
    <RecipeInfoContext.Provider value={value}>
      {children}
    </RecipeInfoContext.Provider>
  );
}
