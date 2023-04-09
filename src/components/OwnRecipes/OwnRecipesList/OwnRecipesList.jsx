import OwnRecipesItem from './OwnRecipesItem/OwnRecipesItem';

import { OwnRecipesListStyled } from './OwnRecipesList.styled';

export default function OwnRecipesList({ recipes }) {
  return (
    <OwnRecipesListStyled>
      {recipes?.map(recipe => (
        <OwnRecipesItem key={recipe._id} recipe={recipe} />
      ))}
    </OwnRecipesListStyled>
  );
}
