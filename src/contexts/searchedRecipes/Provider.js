import { createContext, useContext, useState } from 'react';

import { Status } from 'constants';

export const RecipesContext = createContext();

export const useRecipes = () => useContext(RecipesContext);

export const SearchedRecipesProvider = ({ children }) => {
  const [searchedResipes, setsearchedResipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [status, setStatus] = useState(Status.IDLE);

  const updateRecipes = value => {
    setsearchedResipes(value);
  };

  const updatesearchValue = value => {
    setSearchValue(value);
  };

  const updatesearchType = selectedType => {
    console.log('selectedType', selectedType);
    const { value } = selectedType;
    setSearchType(value);
  };

  const updateStatus = value => {
    setStatus(value);
  };

  return (
    <RecipesContext.Provider
      value={{
        searchedResipes,
        searchValue,
        searchType,
        status,
        updateRecipes,
        updatesearchValue,
        updatesearchType,
        updateStatus,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
