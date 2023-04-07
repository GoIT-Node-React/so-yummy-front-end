import React from 'react';

import { RecipesContext } from '../../contexts/searchedRecipes/Provider';
import { useContext } from 'react';

import MainPageTitle from '../../components/MainPageTitle';
import SearchBar from '../../components/SerchBar';
import SearchedRecipesList from '../../components/SearchedRecipesList';
import NotFoundRecipes from 'components/NotFoundRecipes';

import { Container } from '../../components/common/Container.styled';

export default function SearchPage() {
  const { searchedResipes } = useContext(RecipesContext);

  console.log('searchedResipes', searchedResipes);

  return (
    <Container style={{ backgroundColor: '##ECECEC' }}>
      <MainPageTitle />
      <SearchBar />
      {searchedResipes.length === 0 ? (
        <NotFoundRecipes />
      ) : (
        <SearchedRecipesList />
      )}
    </Container>
  );
}
