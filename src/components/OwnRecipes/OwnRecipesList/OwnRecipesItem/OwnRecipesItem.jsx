import { useOwnRecipesContext } from 'components/OwnRecipes/OwnRecipes.context';
import RecipeCard from 'components/common/RecipeCard';
import { routes } from 'constants/routes';
import { OwnRecipesItemStyled } from './OwnRecipesItem.styled';
import { OwnRecipesItemPropTypes } from './OwnRecipesItem.props';

export default function OwnRecipesItem({ recipe }) {
  const { removeOwnRecipe } = useOwnRecipesContext();

  const removeHandler = async () => {
    await removeOwnRecipe(recipe._id);
  };

  return (
    <OwnRecipesItemStyled>
      <RecipeCard
        owner={true}
        recipe={recipe}
        onDelete={removeHandler}
        to={`${routes.RECIPE_PAGE}/${recipe._id}`}
      />
    </OwnRecipesItemStyled>
  );
}

OwnRecipesItem.propTypes = OwnRecipesItemPropTypes;
