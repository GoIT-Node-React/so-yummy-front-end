import { routes } from 'constants/routes';
import { FooterNav, FooterNavList, LinkFooter } from './Footer.styled';

export const FooterNavigate = () => {
  return (
    <FooterNav>
      <FooterNavList>
        <LinkFooter to={`${routes.SEARCH_PAGE}?type=ingredient`}>
          Ingredients
        </LinkFooter>
        <LinkFooter to={routes.ADD_RECIPE_PAGE}>Add recipes</LinkFooter>
        <LinkFooter to={routes.MY_RECIPES_PAGE}>My recipes</LinkFooter>
        <LinkFooter to={routes.FAVORITE_PAGE}>Favorite</LinkFooter>
        <LinkFooter to={routes.SHOPPING_LIST_PAGE}>Shopping list</LinkFooter>
      </FooterNavList>
    </FooterNav>
  );
};
