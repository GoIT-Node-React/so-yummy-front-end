import { FiClock } from 'react-icons/fi';
import { RecipeHeroPropTypes } from './RecipeHero.props';
import {
  RecipeAddToFavoriteButton,
  RecipeDescription,
  RecipeHeroContainer,
  RecipeHeroLoader,
  RecipeTime,
  RecipeTitle,
} from './RecipeHero.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/user.selectors';
import { useRecipeInfoContext } from 'pages/RecipeInfoPage/RecipeInfo.context';
import Loader from 'components/common/Loader/Loader';
import { processingError } from 'helpers';

export default function RecipeHero({
  _id: recipeId,
  title,
  description,
  time,
  favorites,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id: userId } = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);
  const { addRecipeToFavorite, deleteRecipeFromFavorite } =
    useRecipeInfoContext();

  useEffect(() => {
    setIsFavorite(favorites.includes(userId));
  }, [favorites, userId]);

  const clickFavoriteButtonHandler = async evt => {
    evt.target.blur();
    setIsLoading(true);
    try {
      if (isFavorite) {
        await deleteRecipeFromFavorite(recipeId);
      } else {
        await addRecipeToFavorite(recipeId);
      }
    } catch (error) {
      processingError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RecipeHeroContainer>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeDescription>{description}</RecipeDescription>
      {isLoading ? (
        <RecipeHeroLoader>
          <Loader />
        </RecipeHeroLoader>
      ) : (
        <RecipeAddToFavoriteButton onClick={clickFavoriteButtonHandler}>
          {isFavorite ? 'Remove from favorite' : 'Add to favorite recipes'}
        </RecipeAddToFavoriteButton>
      )}

      <RecipeTime>
        <FiClock />
        <p>{time} min</p>
      </RecipeTime>
    </RecipeHeroContainer>
  );
}

RecipeHero.propTypes = RecipeHeroPropTypes;
