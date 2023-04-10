import PropTypes from 'prop-types';
import { RecipeHeroPropTypes } from './RecipeHero/RecipeHero.props';
import { RecipeIngredientsPropTypes } from './RecipeIngredients/RecipeIngredients.props';
import { RecipePreparationPropTypes } from './RecipePreparation/RecipePreparation.props';

export const RecipeInfoPropTypes = {
  info: PropTypes.shape({
    ...RecipeHeroPropTypes,
    ...RecipeIngredientsPropTypes,
    ...RecipePreparationPropTypes,
  }).isRequired,
};
