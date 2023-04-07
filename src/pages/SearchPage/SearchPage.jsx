import React from 'react';

import MainPageTitle from '../../components/MainPageTitle';
import SearchBar from '../../components/SerchBar';
import SearchedRecipesList from '../../components/SearchedRecipesList';

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
