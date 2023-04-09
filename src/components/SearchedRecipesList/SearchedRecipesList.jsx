import Loader from 'components/common/Loader/Loader';
import Card from 'components/common/Card/Card';
import {
  SearchedRecipes,
  SearchedRecipesListItem,
} from './SearchedRecipesList.styled';
import { useSearchContext } from 'contexts/Search.context';

export default function SearchedRecipesList() {
  const { recipes, isLoading } = useSearchContext();

  return (
    <>
      {isLoading && <Loader />}
      {recipes.length > 0 && !isLoading && (
        <>
          <SearchedRecipes>
            {recipes.map(({ _id, title, thumb }) => {
              return (
                <SearchedRecipesListItem key={_id}>
                  <Card
                    src={thumb}
                    title={title}
                    to={`/recipe/${_id}`}
                    id={_id}
                  />
                </SearchedRecipesListItem>
              );
            })}
          </SearchedRecipes>
        </>
      )}
    </>
  );
}
