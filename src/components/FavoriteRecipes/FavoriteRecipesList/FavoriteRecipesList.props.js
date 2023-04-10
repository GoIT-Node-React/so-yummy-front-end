import PropTypes from 'prop-types';
import { FavoriteRecipesItemPropTypes } from './FavoriteRecipesItem/FavoriteRecipesItem.props';

export const FavoriteRecipesListPropTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      ...FavoriteRecipesItemPropTypes.recipe,
    })
  ).isRequired,
};
