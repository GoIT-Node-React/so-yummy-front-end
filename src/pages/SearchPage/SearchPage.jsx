import React, { useCallback, useEffect, useRef, useState } from 'react';

import MainPageTitle from '../../components/MainPageTitle';
import SearchBar from '../../components/SerchBar';
import SearchedRecipesList from '../../components/SearchedRecipesList';
import SearchRecipesMessage from 'components/SearchRecipesMessage';
import { Container } from '../../components/common/Container.styled';
import { Section, SearchedRecipesListWrapper } from './SearchPage.styled';

import { searchRecipesMessage } from 'constants/message';
import SearchContextProvider from 'contexts/Search.context';
import { useSearchParams } from 'react-router-dom';
import { searchService } from 'services/recipe.service';
import { processingError } from 'helpers';
import useAppPagination from 'hooks/useAppPagination';
import { useMediaQuery } from 'react-responsive';
import { useScrollToTop } from 'hooks/useScrollToTop';

export default function SearchPage() {
  useScrollToTop();
  const [params] = useSearchParams();
  const searchParams = Object.fromEntries(params);
  const [recipes, setRecipes] = useState(null);
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
  const isTabletOrMobile = useMediaQuery({
    maxWidth: 1439,
  });

  const pagination = useRef({
    page: 1,
    totalPages: 1,
    limit: isTabletOrMobile ? 6 : 12,
  });

  const { Component: Pagination } = useAppPagination({
    totalPages: pagination.current.totalPages,
    page: pagination.current.page,
    onFetch: p => fetchData(p, pagination.current.limit),
  });

  const updateQuery = value => {
    setQuery(value);
  };

  const updateType = value => {
    setType(value);
  };

  const fetchData = useCallback(
    async (p = 1, l = pagination.current.limit) => {
      const searchQuery = query.trim();
      if (searchQuery.length === 0 || !type) return;

      setIsLoading(true);
      try {
        const { data } = await searchService(type, searchQuery, p, l);
        const { recipes, limit, page, total } = data;

        pagination.current.totalPages = Math.ceil(total / limit);
        pagination.current.page = page;

        setRecipes(recipes);
      } catch (error) {
        processingError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [query, type]
  );

  useEffect(() => {
    pagination.current.limit = isTabletOrMobile ? 6 : 12;

    fetchData(1, pagination.current.limit);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTabletOrMobile]);

  return (
    <Section>
      <Container>
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
              <SearchedRecipesListWrapper>
                <SearchedRecipesList />
                {pagination.current.totalPages > 1 && <Pagination />}
              </SearchedRecipesListWrapper>
            ) : (
              <>
                {!isLoading && (
                  <SearchRecipesMessage
                    message={searchRecipesMessage.notFound}
                  />
                )}
              </>
            )
          ) : (
            <>
              {!isLoading && (
                <SearchRecipesMessage
                  message={searchRecipesMessage.trySearch}
                />
              )}
            </>
          )}
        </SearchContextProvider>
      </Container>
    </Section>
  );
}
