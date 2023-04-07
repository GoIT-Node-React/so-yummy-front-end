//import { RecipeIngredietItemPropTypes } from './RecipeIngredietItem.props';

import { RecipeIngredietItemPropTypes } from './RecipeIngredietItem.props';
import {
  RecipeIngredient,
  RecipeIngredientContainer,
  RecipeIngredientFavorite,
  RecipeIngredientFavoriteCheckbox,
  RecipeIngredientThumb,
  RecipeIngredientTitle,
  RecipeIngredietMeasure,
  RecipeIngredietMeasureText,
} from './RecipeIngredietItem.styled';

export default function RecipeIngredietItem({ ingredient }) {
  const { ttl, measure, thb } = ingredient;

  return (
    <RecipeIngredient>
      <RecipeIngredientContainer>
        <RecipeIngredientThumb src={thb} alt={ttl} />
        <RecipeIngredientTitle>{ttl}</RecipeIngredientTitle>
      </RecipeIngredientContainer>
      <RecipeIngredietMeasure>
        <RecipeIngredietMeasureText>{measure}</RecipeIngredietMeasureText>
      </RecipeIngredietMeasure>
      <RecipeIngredientFavorite>
        <RecipeIngredientFavoriteCheckbox type="checkbox" />
      </RecipeIngredientFavorite>
    </RecipeIngredient>
  );
}

RecipeIngredietItem.propTypes = RecipeIngredietItemPropTypes;
