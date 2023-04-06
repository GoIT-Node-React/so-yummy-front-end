import { createContext, useContext, useState } from 'react';

export const RecipesContext = createContext();

export const useRecipes = () => useContext(RecipesContext);

export const SearchedRecipesProvider = ({ children }) => {
  const [searchedResipes, setsearchedResipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('');

  const updateRecipes = value => {
    setsearchedResipes(value);
  };

  const updatesearchValue = value => {
    setSearchValue(value);
  };

  const updatesearchType = selectedType => {
    const { value } = selectedType;
    setSearchType(value);
  };

  return (
    <RecipesContext.Provider
      value={{
        searchedResipes,
        searchValue,
        searchType,
        updateRecipes,
        updatesearchValue,
        updatesearchType,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
