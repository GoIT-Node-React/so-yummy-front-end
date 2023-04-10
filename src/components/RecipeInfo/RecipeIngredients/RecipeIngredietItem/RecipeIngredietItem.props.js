import PropTypes from 'prop-types';

export const RecipeIngredietItemPropTypes = {
  recipeId: PropTypes.string.isRequired,
  ingredient: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    measure: PropTypes.string.isRequired,
    t: PropTypes.string.isRequired,
    thb: PropTypes.string.isRequired,
    ttl: PropTypes.string.isRequired,
  }),
};
