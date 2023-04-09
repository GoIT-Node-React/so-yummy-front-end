import PropTypes from 'prop-types';
import { RecipeIngredietItemPropTypes } from './RecipeIngredietItem/RecipeIngredietItem.props';

export const RecipeIngredientsPropTypes = {
  ingredients: PropTypes.arrayOf(RecipeIngredietItemPropTypes.ingredient)
    .isRequired,
};
