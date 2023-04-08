import { useContext } from 'react';

import SearchPagination from '../../components/SearchPagination';
import Loader from 'components/common/Loader/Loader';
import Card from 'components/common/Card/Card';

import { RecipesContext } from '../../contexts/searchedRecipes/Provider';

import {
  SearchedRecipes,
  SearchedRecipesListItem,
} from './SearchedRecipesList.styled';

import { Status } from 'constants';

export default function SearchedRecipesList() {
  const { searchedResipes, status } = useContext(RecipesContext);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {searchedResipes.length > 0 && status !== Status.PENDING && (
        <>
          <SearchedRecipes>
            {searchedResipes.map(({ _id, title, thumb }) => {
              return (
                <SearchedRecipesListItem key={_id}>
                  <Card
                    src={thumb}
                    title={title}
                    to={`/recipes/${_id}`}
                    id={_id}
                  />
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
