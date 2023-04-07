import PropTypes from 'prop-types';

export const RecipeHeroPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
