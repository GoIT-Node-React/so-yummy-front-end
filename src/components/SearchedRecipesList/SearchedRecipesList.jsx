import Loader from 'components/common/Loader/Loader';
import Card from 'components/common/Card/Card';
import {
  SearchedRecipes,
  SearchedRecipesListItem,
  LoaderSearchRecipeWrapper,
} from './SearchedRecipesList.styled';

import { useSearchContext } from 'contexts/Search.context';

export default function SearchedRecipesList() {
  const { recipes, isLoading } = useSearchContext();

  return (
    <>
      {recipes.length > 0 && (
        <SearchedRecipes>
          {recipes.map(({ _id, title, thumb }) => {
            return (
              <SearchedRecipesListItem key={_id}>
                {isLoading ? (
                  <LoaderSearchRecipeWrapper>
                    <Loader />
                  </LoaderSearchRecipeWrapper>
                ) : (
                  <Card
                    src={thumb}
                    title={title}
                    to={`/recipe/${_id}`}
                    id={_id}
                  />
                )}
              </SearchedRecipesListItem>
            );
          })}
        </SearchedRecipes>
      )}
    </>
  );
}
