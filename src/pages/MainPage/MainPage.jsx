import { Container } from 'components/common/Container.styled';
import { useCallback, useEffect, useState } from 'react';
import { getMainPageRecipesService } from 'services/recipe.service';
import { processingError } from 'helpers';
import Card from 'components/common/Card/Card';
import {
  MainPageCategoriesItem,
  MainPageCategoriesList,
  MainPageOtherCategoriesButton,
  MainPageRecipesItem,
  MainPageRecipesList,
  MainPageSection,
  MainPageTitle,
  SeeAllButton,
} from './MainPage.styled';
import { routes } from 'constants/routes';
import { useMediaQuery } from 'react-responsive';
import MainPageHero from 'components/MainPageHero/MainPageHero';
import MainLoader from 'components/MainLoader/MainLoader';
import { useScrollToTop } from 'hooks/useScrollToTop';

export default function MainPage() {
  useScrollToTop();
  const [recipesByCategories, setRecipesByCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 375 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const getMaitPageRecipes = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getMainPageRecipesService([
        'Breakfast',
        'Miscellaneous',
        'Chicken',
        'Dessert',
      ]);

      setRecipesByCategories(Object.entries(data.categories));
    } catch (error) {
      processingError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMaitPageRecipes();
  }, [getMaitPageRecipes]);

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <>
          <MainPageHero />
          <MainPageSection>
            <Container>
              <MainPageCategoriesList>
                {recipesByCategories.map(([categoryTitle, recipes]) => {
                  return (
                    <MainPageCategoriesItem key={categoryTitle}>
                      <MainPageTitle>{categoryTitle}</MainPageTitle>
                      <MainPageRecipesList>
                        {recipes
                          .filter(
                            (t, index) =>
                              (isMobile && index < 1) ||
                              (isTablet && index < 2) ||
                              isDesktop
                          )
                          .map(({ _id, title, thumb }) => (
                            <MainPageRecipesItem key={_id}>
                              <Card
                                src={thumb}
                                title={title}
                                to={`${routes.RECIPE_PAGE}/${_id}`}
                              />
                            </MainPageRecipesItem>
                          ))}
                      </MainPageRecipesList>
                      <SeeAllButton
                        to={`${routes.CATEGORIES_PAGE}/${categoryTitle}`}
                      >
                        See all
                      </SeeAllButton>
                    </MainPageCategoriesItem>
                  );
                })}
              </MainPageCategoriesList>

              <MainPageOtherCategoriesButton to={`${routes.CATEGORIES_PAGE}`}>
                Other categories
              </MainPageOtherCategoriesButton>
            </Container>
          </MainPageSection>
        </>
      )}
    </>
  );
}
