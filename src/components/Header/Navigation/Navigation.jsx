import { routes } from 'constants/routes';
import {
  NavBar,
  NavItem,
  NavLinkStyled,
  SearchIcon,
} from './Navigation.styled';

function Navigation(props) {
  const { onClick } = props;
  return (
    <NavBar mr={props.mr} fd={props.fd}>
      <NavItem>
        <NavLinkStyled to={`${routes.CATEGORIES_PAGE}`} onClick={onClick}>
          Categories
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/add " onClick={onClick}>
          Add recipes
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/my" onClick={onClick}>
          My recipes
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/favorite" onClick={onClick}>
          Favorites
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/shopping-list" onClick={onClick}>
          Shopping list
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/search" onClick={onClick}>
          <SearchIcon />
        </NavLinkStyled>
      </NavItem>
    </NavBar>
  );
}

export default Navigation;
