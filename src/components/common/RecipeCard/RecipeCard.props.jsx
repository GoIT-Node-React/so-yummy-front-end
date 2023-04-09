import PropTypes from 'prop-types';

export const RecipeCardPropTypes = {
  owner: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
