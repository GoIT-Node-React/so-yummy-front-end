import React, { useContext } from 'react';

import MainPageTitle from '../../components/MainPageTitle';
import SearchBar from '../../components/SerchBar';
import SearchedRecipesList from '../../components/SearchedRecipesList';
import SearchRecipesMessage from 'components/SearchRecipesMessage';
import { Container } from '../../components/common/Container.styled';

import { RecipesContext } from '../../contexts/searchedRecipes/Provider';

import { searchRecipesMessage } from 'constants/message';

export default function SearchPage() {
  const { searchedResipes } = useContext(RecipesContext);

  return (
    <Container style={{ backgroundColor: '##ECECEC' }}>
      <MainPageTitle />
      <SearchBar />
      {searchedResipes.length === 0 ? (
        <SearchRecipesMessage text={searchRecipesMessage.notFound} />
      ) : (
        <SearchedRecipesList />
      )}
    </Container>
  );
}
