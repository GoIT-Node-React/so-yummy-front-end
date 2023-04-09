import { createContext, useContext, useState } from 'react';

import { Status } from 'constants';

export const RecipesContext = createContext();

export const useRecipes = () => useContext(RecipesContext);

export const SearchedRecipesProvider = ({ children }) => {
  const [searchedResipes, setsearchedResipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('');
  const [select, setSelect] = useState('ingredient');
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setpage] = useState(2);
  const [limit, setlimit] = useState(3);
  const [totalRecipePage, setTotalRecipePage] = useState(null);

  const updateRecipes = value => {
    setsearchedResipes(value);
  };

  const updatesearchValue = value => {
    setSearchValue(value);
  };

  const updatesearchType = selectedValue => {
    // const { value } = selectedType;
    // setSearchType(value);

    setSearchType(selectedValue);
  };

  const updateStatus = value => {
    setStatus(value);
  };

  const updatePage = page => {
    setpage(page);
  };

  const updateLimit = limit => {
    setlimit(limit);
  };

  const updateTotalRecipePage = total => {
    setTotalRecipePage(total);
  };

  const updateselect = selectType => {
    // const { value } = selectType;
    // setSelect(value);

    setSelect(selectType);
  };

  return (
    <RecipesContext.Provider
      value={{
        searchedResipes,
        searchValue,
        searchType,
        status,
        page,
        limit,
        select,
        totalRecipePage,
        updateRecipes,
        updatesearchValue,
        updatesearchType,
        updateStatus,
        updatePage,
        updateLimit,
        updateTotalRecipePage,
        updateselect,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
