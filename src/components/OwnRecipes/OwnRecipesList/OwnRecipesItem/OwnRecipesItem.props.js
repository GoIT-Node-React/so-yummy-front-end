import PropTypes from 'prop-types';

export const OwnRecipesItemPropTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
