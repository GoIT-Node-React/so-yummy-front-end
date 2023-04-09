import { NavBar, NavItem, NavLink, SearchIcon } from './Navigation.styled';

function Navigation(props) {
    const { onClick } = props;
    return (
        <NavBar mr={props.mr} fd={props.fd}>
            <NavItem>
                <NavLink to="/categories" onClick={onClick}>
                    Categories
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/add " onClick={onClick}>
                    Add recipes
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/my" onClick={onClick}>
                    My recipes
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/favorite" onClick={onClick}>
                    Favorites
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/shopping-list" onClick={onClick}>
                    Shopping list
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/search" onClick={onClick}>
                    <SearchIcon />
                </NavLink>
            </NavItem>
        </NavBar>
    );
}

export default Navigation;
