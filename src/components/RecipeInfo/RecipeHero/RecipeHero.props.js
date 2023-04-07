import PropTypes from 'prop-types';

export const RecipeHeroPropTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
