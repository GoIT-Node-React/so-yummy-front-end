import { lazy, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk } from 'redux/auth/auth.thunk';
import { selectAccessToken, selectCurrent } from 'redux/auth/auth.selectors';
import AppToastContainer from './AppToastContainer/AppToastContainer';
import SharedLayout from './SharedLayout/SharedLayout';
import { routes } from 'constants/routes';
import { PrivatePage, RestrictedPage } from 'pages/access';
import AuthLayout from './layouts/auth';
import MainLoader from './MainLoader/MainLoader';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const RegisterPage = lazy(() => import('pages/Auth/RegisterPage'));
const SigninPage = lazy(() => import('pages/Auth/SigninPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const CategoryRecipes = lazy(() => import('components/CategoryRecipes'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const OwnRecipesPage = lazy(() => import('pages/OwnRecipesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const RecipeInfoPage = lazy(() => import('pages/RecipeInfoPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectCurrent);
  const accessToken = useSelector(selectAccessToken);
  const isFirst = useRef(true);

  useEffect(() => {
    if (accessToken && isFirst.current) {
      dispatch(currentThunk());
      isFirst.current = false;
    }
  }, [dispatch, accessToken]);

  if (isLoading) return <MainLoader />;

  return (
    <>
      <Routes>
        <Route
          path={routes.WELCOME_PAGE}
          element={<RestrictedPage component={<WelcomePage />} />}
        />

        <Route path={routes.MAIN_PAGE} element={<AuthLayout />}>
          <Route
            path={routes.REGISTER_PAGE}
            element={<RestrictedPage component={<RegisterPage />} />}
          />
          <Route
            path={routes.SIGNIN_PAGE}
            element={<RestrictedPage component={<SigninPage />} />}
          />
        </Route>

        <Route path={routes.MAIN_PAGE} element={<SharedLayout />}>
          <Route index element={<PrivatePage component={<MainPage />} />} />
          <Route
            path={routes.CATEGORIES_PAGE}
            element={<PrivatePage component={<CategoriesPage />} />}
          >
            <Route path=":categoryName" element={<CategoryRecipes />} />
          </Route>
          <Route
            path={routes.FAVORITE_PAGE}
            element={<PrivatePage component={<FavoritePage />} />}
          />
          <Route
            path={routes.MY_RECIPES_PAGE}
            element={<PrivatePage component={<OwnRecipesPage />} />}
          />
          <Route
            path={routes.ADD_RECIPE_PAGE}
            element={<PrivatePage component={<AddRecipePage />} />}
          />
          <Route
            path={`${routes.RECIPE_PAGE}/:recipeId`}
            element={<PrivatePage component={<RecipeInfoPage />} />}
          />
          <Route
            path={routes.SEARCH_PAGE}
            element={<PrivatePage component={<SearchPage />} />}
          />
          <Route
            path={routes.SHOPPING_LIST_PAGE}
            element={<PrivatePage component={<ShoppingListPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <AppToastContainer />
    </>
  );
};
