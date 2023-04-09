import {
  FooterNav,
  FooterNavList,
  LinkFooter
} from './Footer.styled';

export const FooterNavigate = () => {
  return (
        <FooterNav>
          <FooterNavList>
              <LinkFooter to="/search">Ingredients</LinkFooter>
              <LinkFooter to="/add">Add recipes</LinkFooter>
              <LinkFooter to="/my">My recipes</LinkFooter>
              <LinkFooter to="/favorite">Favorite</LinkFooter>
              <LinkFooter to="/shopping-list">Shopping list</LinkFooter>
          </FooterNavList>
        </FooterNav>
  );
};
