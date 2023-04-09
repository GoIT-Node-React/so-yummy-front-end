import PropTypes from 'prop-types';
import { OwnRecipesItemPropTypes } from './OwnRecipesItem/OwnRecipesItem.props';

export const OwnRecipesListPropTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      ...OwnRecipesItemPropTypes.recipe,
    })
  ).isRequired,
};
