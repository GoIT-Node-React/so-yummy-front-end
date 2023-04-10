import RecipeCard from 'components/common/RecipeCard';
import { routes } from 'constants/routes';
import { FavoriteRecipesItemPropTypes } from './FavoriteRecipesItem.props';
import { FavoriteRecipesItemStyled } from './FavoriteRecipesItem.styled';
import { useFavoriteRecipesContext } from 'components/FavoriteRecipes/FavoriteRecipes.context';

export default function FavoriteRecipesItem({ recipe }) {
  const { removeRecipeFromFavorite } = useFavoriteRecipesContext();

  const removeHandler = async () => {
    await removeRecipeFromFavorite(recipe._id);
  };

  return (
    <FavoriteRecipesItemStyled>
      <RecipeCard
        recipe={recipe}
        onDelete={removeHandler}
        to={`${routes.RECIPE_PAGE}/${recipe._id}`}
      />
    </FavoriteRecipesItemStyled>
  );
}

FavoriteRecipesItem.propTypes = FavoriteRecipesItemPropTypes;
