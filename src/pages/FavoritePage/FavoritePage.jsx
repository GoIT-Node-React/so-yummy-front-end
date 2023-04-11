import React from 'react';

import FavoriteRecipes from 'components/FavoriteRecipes/FavoriteRecipes';
import { useScrollToTop } from 'hooks/useScrollToTop';

export default function FavoritePage() {
  useScrollToTop();
  return (
    <>
      <FavoriteRecipes />
    </>
  );
}
