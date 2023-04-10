import { useNavigate } from 'react-router-dom';
import { RecipeCardPropTypes } from './RecipeCard.props';
import {
  RecipeCardContainer,
  RecipeCardRemoveButton,
  RecipeCardDescription,
  RecipeCardImage,
  RecipeCardSeeRecipeButton,
  RecipeCardThumb,
  RecipeCardTime,
  RecipeCardTitle,
  ReipeCardStyle,
  RecipeCardRemovLoader,
  RecipeCardWrapper,
  RecipeCardRemoveLoaderWrapper,
} from './RecipeCard.styled';
import { FiTrash2 } from 'react-icons/fi';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import { processingError } from 'helpers';

export default function RecipeCard({ owner, to, onDelete, recipe }) {
  const { thumb, title, time, description } = recipe;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const seeRecipeHandler = () => {
    navigate(to);
  };

  const removeHandler = async () => {
    setIsLoading(true);
    try {
      await onDelete();
    } catch (error) {
      processingError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReipeCardStyle owner={owner} isDeleting={isLoading}>
      <RecipeCardWrapper>
        <RecipeCardThumb>
          <RecipeCardImage src={thumb} />
        </RecipeCardThumb>
        <RecipeCardContainer>
          <RecipeCardTitle>{title}</RecipeCardTitle>
          <RecipeCardDescription>{description}</RecipeCardDescription>
          <RecipeCardTime>{time} min</RecipeCardTime>
          <RecipeCardRemoveButton
            type="button"
            onClick={removeHandler}
            aria-label="Delete recipe from favorite button"
          >
            <FiTrash2 />
          </RecipeCardRemoveButton>
          <RecipeCardSeeRecipeButton type="button" onClick={seeRecipeHandler}>
            See recipe
          </RecipeCardSeeRecipeButton>
        </RecipeCardContainer>
      </RecipeCardWrapper>
      {isLoading && (
        <RecipeCardRemovLoader>
          <RecipeCardRemoveLoaderWrapper>
            <Loader />
            Deleting recipe...
          </RecipeCardRemoveLoaderWrapper>
        </RecipeCardRemovLoader>
      )}
    </ReipeCardStyle>
  );
}

RecipeCard.propTypes = RecipeCardPropTypes;
RecipeCard.defaultProps = {
  owner: false,
};
