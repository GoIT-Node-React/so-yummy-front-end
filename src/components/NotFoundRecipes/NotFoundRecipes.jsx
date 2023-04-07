import {
  NotFoundRecipesWrapper,
  NotFoundRecipesImage,
  NotFoundRecipesText,
} from './NotFoundRecipes.styled';

export default function NotFoundRecipes() {
  return (
    <NotFoundRecipesWrapper>
      <NotFoundRecipesImage></NotFoundRecipesImage>
      <NotFoundRecipesText>
        Try looking for something else..
      </NotFoundRecipesText>
    </NotFoundRecipesWrapper>
  );
}
