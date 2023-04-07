import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from 'constants/routes';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import SharedLayout from './SharedLayout/SharedLayout';
//  
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
import FavoritePage from 'pages/FavoritePage/FavoritePage';
import OwnRecipesPage from 'pages/OwnRecipesPage/OwnRecipesPage';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import RecipePage from 'pages/RecipePage/RecipePage';
import SearchPage from 'pages/SearchPage/SearchPage';
import ShoppingListPage from 'pages/ShoppingListPage/ShoppingListPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={routes.WELCOME_PAGE} element={<WelcomePage />} />
          <Route path={routes.REGISTER_PAGE} element={<RegisterPage />} />
          <Route path={routes.SIGNIN_PAGE} element={<SigninPage />} />

          <Route path={routes.MAIN_PAGE} element={<SharedLayout />}>
            <Route index element={<WelcomePage />} />
            <Route path={routes.CATEGORIES_PAGE} element={<CategoriesPage />} />
            <Route path={routes.FAVORITE_PAGE} element={<FavoritePage />} />
            <Route path={routes.MY_RECIPES_PAGE} element={<OwnRecipesPage />} />
            <Route path={routes.ADD_RECIPE_PAGE} element={<AddRecipePage />} />
            <Route path={routes.RECIPE_PAGE} element={<RecipePage />} />
            <Route path={routes.SEARCH_PAGE} element={<SearchPage />} />
            <Route
              path={routes.SHOPPING_LIST_PAGE}
              element={<ShoppingListPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
