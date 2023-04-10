import { useState } from 'react';
import { RecipePreparationPropTypes } from './RecipePreparation.props';
import {
  RecipePreparationContainer,
  RecipePreparationHeader,
  RecipePreparationItem,
  RecipePreparationList,
  RecipePreparationWrapper,
  RecipeThumb,
} from './RecipePreparation.styled';

export default function RecipePreparation({ title, instructions, thumb }) {
  const [instructionsList] = useState(() => instructions.split('\n'));

  return (
    <RecipePreparationContainer>
      <RecipePreparationWrapper>
        <RecipePreparationHeader>Recipe Preparation</RecipePreparationHeader>
        <RecipePreparationList>
          {instructionsList
            .filter(i => i.trim().length)
            .map((instruction, index) => (
              <RecipePreparationItem key={index}>
                {instruction}
              </RecipePreparationItem>
            ))}
        </RecipePreparationList>
      </RecipePreparationWrapper>
      <RecipeThumb src={thumb} alt={`Recip's "${title}" image`} />
    </RecipePreparationContainer>
  );
}

RecipePreparation.propTypes = RecipePreparationPropTypes;
