import PopularRecipeCard from './PopularRecipeCard';
import { Subtitle } from 'components/AddRecipeForm/AddRecipeForm.styled';
import { PopularRecipesContainer, RecipesList } from './PopularRecipes.styled';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getPopularRecipesService } from 'services/popularRecipes.service';
export default function PopularRecipes() {
  const [recipes, setRecipes] = useState([]);
  const isTablet = useMediaQuery({
    query: '((min-width: 768px) and (max-width: 1439px))',
  });
  const getRecipes = async () => {
    const { data } = isTablet
      ? await getPopularRecipesService(2)
      : await getPopularRecipesService(4);
    setRecipes(data.recipes);
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <PopularRecipesContainer>
      <Subtitle>Popular recipe</Subtitle>
      {recipes && (
        <RecipesList>
          {recipes.map(({ _id, thumb, title, description }) => (
            <PopularRecipeCard
              key={_id}
              src={thumb}
              title={title}
              text={description}
            />
          ))}
        </RecipesList>
      )}
    </PopularRecipesContainer>
  );
}
