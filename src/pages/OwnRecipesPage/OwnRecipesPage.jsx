import OwnRecipes from 'components/OwnRecipes/OwnRecipes';
import { useScrollToTop } from 'hooks/useScrollToTop';

export default function OwnRecipesPage() {
  useScrollToTop();
  return <OwnRecipes />;
}
