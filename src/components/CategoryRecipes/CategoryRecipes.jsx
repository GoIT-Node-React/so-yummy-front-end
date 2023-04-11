import { useParams } from 'react-router-dom';

export default function CategoryRecipes() {
  const { categoryName } = useParams();

  return <h1>{categoryName}</h1>;
}
