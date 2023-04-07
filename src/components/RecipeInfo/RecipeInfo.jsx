import { RecipeInfoPropTypes } from './RecipeInfo.props';
import RecipeHero from './RecipeHero';
import { Recipe, RecipeContainer } from './RecipeInfo.styled';
import RecipeIngredients from './RecipeIngredients';
import RecipePreparation from './RecipePreparation/RecipePreparation';

export default function RecipeInfo({ info }) {
  const {
    title,
    description,
    time,
    favorites,
    ingredients,
    instructions,
    thumb,
  } = info;

  console.log(info);

  return (
    <Recipe>
      <RecipeContainer>
        <RecipeHero
          title={title}
          description={description}
          time={time}
          favorites={favorites}
        />
        <RecipeIngredients ingredients={ingredients} />
        <RecipePreparation
          title={title}
          instructions={instructions}
          thumb={thumb}
        />
      </RecipeContainer>
    </Recipe>
  );
}

RecipeInfo.propTypes = RecipeInfoPropTypes;
