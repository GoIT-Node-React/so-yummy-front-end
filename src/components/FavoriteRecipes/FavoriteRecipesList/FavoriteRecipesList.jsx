import { FavoriteRecipesListStyled } from './FavoriteRecipes.styled';
import FavoriteRecipesItem from './FavoriteRecipesItem/FavoriteRecipesItem';
import { FavoriteRecipesListPropTypes } from './FavoriteRecipesList.props';

export default function FavoriteRecipesList({ recipes }) {
  return (
    <FavoriteRecipesListStyled>
      {recipes?.map(recipe => (
        <FavoriteRecipesItem key={recipe._id} recipe={recipe} />
      ))}
    </FavoriteRecipesListStyled>
  );
}

FavoriteRecipesList.propTypes = FavoriteRecipesListPropTypes;
