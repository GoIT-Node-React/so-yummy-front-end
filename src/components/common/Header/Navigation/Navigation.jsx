import { NavBar, NavItem, NavLink, SearchIcon } from './Navigation.styled';

function Navigation(props) {
    return (
        <NavBar>
            <NavItem>
                <NavLink to="/categories">Categories</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/add ">Add recipes</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/my">My recipes</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/favorite">Favorites</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/shopping-list">Shopping list</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/search">
                    <SearchIcon />
                </NavLink>
            </NavItem>
        </NavBar>
    );
}

export default Navigation;
