import {
  SearchedRecipes,
  SearchedRecipesListItem,
  SearchedRecipesItemImage,
  SearchedRecipesItemTitle,
} from './SearchedRecipesList.styled';

// import { NavLink } from 'react-router-dom';

import { Status } from 'constants';
import Loader from 'components/common/Loader/Loader';

import SearchPagination from '../../components/SearchPagination';

import { RecipesContext } from '../../contexts/searchedRecipes/Provider';
import { useContext } from 'react';

export default function SearchedRecipesList() {
  const {
    searchedResipes,
    searchValue,
    searchType,
    status,
    updateRecipes,
    updatesearchValue,
    updatesearchType,
    updateStatus,
  } = useContext(RecipesContext);

  return (
    <>
      {/* <NavLink to="/searched">Лінка</NavLink> */}
      {status === Status.PENDING && <Loader />}
      {searchedResipes.length > 0 && status !== Status.PENDING && (
        <>
          <SearchedRecipes>
            {searchedResipes.map(({ _id, title, thumb }) => {
              return (
                <SearchedRecipesListItem key={_id}>
                  <SearchedRecipesItemImage
                    src={thumb}
                  ></SearchedRecipesItemImage>
                  <SearchedRecipesItemTitle>{title}</SearchedRecipesItemTitle>
                </SearchedRecipesListItem>
              );
            })}
          </SearchedRecipes>
          <SearchPagination />
        </>
      )}
    </>
  );
}
