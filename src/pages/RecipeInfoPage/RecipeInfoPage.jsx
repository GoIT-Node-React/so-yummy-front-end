import RecipeInfo from 'components/RecipeInfo/RecipeInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeInfo } from 'services/recipe.service';

export default function RecipeInfoPage() {
  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState(null);

  useEffect(() => {
    const f = async () => {
      const {
        data: { recipe },
      } = await getRecipeInfo(recipeId);

      setRecipeInfo(recipe);
    };
    f();
  }, [recipeId]);

  return <>{recipeInfo && <RecipeInfo info={recipeInfo} />}</>;
}
