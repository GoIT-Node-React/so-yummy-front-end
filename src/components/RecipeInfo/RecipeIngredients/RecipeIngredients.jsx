import { RecipeIngredientsPropTypes } from './RecipeIngredients.props';
import {
  RecipeIngredientsHeader,
  RecipeIngredientsHeaderItem,
  RecipeIngredientsList,
  RecipeIngredientsTable,
} from './RecipeIngredients.styled';
import RecipeIngredietItem from './RecipeIngredietItem';

export default function RecipeIngredients({ recipeId, ingredients }) {
  return (
    <RecipeIngredientsTable>
      <RecipeIngredientsHeader>
        <RecipeIngredientsHeaderItem>Ingredients</RecipeIngredientsHeaderItem>
        <RecipeIngredientsHeaderItem>Number</RecipeIngredientsHeaderItem>
        <RecipeIngredientsHeaderItem>Add ot list</RecipeIngredientsHeaderItem>
      </RecipeIngredientsHeader>
      <RecipeIngredientsList>
        {ingredients.map(ingredient => (
          <RecipeIngredietItem
            key={ingredient._id}
            recipeId={recipeId}
            ingredient={ingredient}
          />
        ))}
      </RecipeIngredientsList>
    </RecipeIngredientsTable>
  );
}

RecipeIngredients.propTypes = RecipeIngredientsPropTypes;
