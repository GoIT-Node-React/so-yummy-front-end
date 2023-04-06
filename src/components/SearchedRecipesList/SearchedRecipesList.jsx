import {
  SearchedRecipes,
  SearchedRecipesListItem,
  SearchedRecipesItemImage,
  SearchedRecipesItemTitle,
} from './SearchedRecipesList.styled';

import { SearchPagination } from '../../components/SearchPagination/SearchPagination';

import { RecipesContext } from '../../contexts/searchedRecipes/Provider';
import { useContext } from 'react';

export function SearchedRecipesList() {
  const { searchedResipes } = useContext(RecipesContext);

  return (
    <>
      <SearchedRecipes>
        {searchedResipes.map(({ _id, title, thumb }) => {
          return (
            <SearchedRecipesListItem key={_id}>
              <SearchedRecipesItemImage src={thumb}></SearchedRecipesItemImage>
              <SearchedRecipesItemTitle>{title}</SearchedRecipesItemTitle>
            </SearchedRecipesListItem>
          );
        })}
      </SearchedRecipes>
      <SearchPagination />
    </>
  );
}
