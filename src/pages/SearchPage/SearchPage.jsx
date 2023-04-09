import React, { useContext, useState } from 'react';

import MainPageTitle from '../../components/MainPageTitle';
import SearchBar from '../../components/SerchBar';
import SearchedRecipesList from '../../components/SearchedRecipesList';
import SearchRecipesMessage from 'components/SearchRecipesMessage';
import { Container } from '../../components/common/Container.styled';

import { searchRecipesMessage } from 'constants/message';
import SearchContextProvider from 'contexts/Search.context';
import { useSearchParams } from 'react-router-dom';
import { searchService } from 'services/search.service';

export default function SearchPage() {
  const [recipes, setRecipes] = useState(null);
  const [params] = useSearchParams();
  const searchParams = Object.fromEntries(params);
  const [query, setQuery] = useState(() => searchParams.value ?? '');
  const [type, setType] = useState(() => {
    switch (searchParams.type) {
      case 'ingredient':
        return 'ingredient';
      case 'title':
      default:
        return 'title';
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateQuery = value => {
    setQuery(value);
  };

  const updateType = value => {
    setType(value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await searchService(type, query);
      const { recipes, limit, page, total } = data;

      setRecipes(recipes);
    } catch (error) {
      // updateStatus(Status.REJECTED);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  // const { searchedResipes } = useContext(RecipesContext);

  return (
    <Container style={{ backgroundColor: '##ECECEC' }}>
      <MainPageTitle />
      <SearchContextProvider
        value={{
          recipes,
          query,
          type,
          isLoading,
          updateQuery,
          updateType,
          fetchData,
        }}
      >
        <SearchBar />
        {recipes ? (
          recipes.length ? (
            <SearchedRecipesList />
          ) : (
            <SearchRecipesMessage message={searchRecipesMessage.notFound} />
          )
        ) : (
          <SearchRecipesMessage message={searchRecipesMessage.trySearch} />
        )}
      </SearchContextProvider>
    </Container>
  );
}
