import React from 'react';

import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { SearchBar } from '../../components/SerchBar/SerchBar';
import { SearchedRecipesList } from '../../components/SearchedRecipesList/SearchedRecipesList';

import { Container } from '../../components/common/Container.styled';

export default function SearchPage() {
  return (
    <Container style={{ backgroundColor: '##ECECEC' }}>
      <MainPageTitle />
      <SearchBar />
      <SearchedRecipesList />
    </Container>
  );
}
