import { FiClock } from 'react-icons/fi';
import { RecipeHeroPropTypes } from './RecipeHero.props';
import {
  RecipeAddToFavoriteButton,
  RecipeDescription,
  RecipeHeroContainer,
  RecipeTime,
  RecipeTitle,
} from './RecipeHero.styled';

export default function RecipeHero({ title, description, time, favorites }) {
  return (
    <RecipeHeroContainer>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeDescription>{description}</RecipeDescription>
      <RecipeAddToFavoriteButton>
        Add to favorite recipes
      </RecipeAddToFavoriteButton>
      <RecipeTime>
        <FiClock />
        <p>{time} min</p>
      </RecipeTime>
    </RecipeHeroContainer>
  );
}

RecipeHero.propTypes = RecipeHeroPropTypes;
