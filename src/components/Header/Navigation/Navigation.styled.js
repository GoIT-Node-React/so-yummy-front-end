import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export const NavBar = styled.ul`
    margin-right: ${props => props.mr || '227px'};

    align-items: center;
    list-style: none;
    display: flex;
    flex-direction: ${props => props.fd || 'row'};
    column-gap: 30px;
    /* column-gap: ${props => props.cg || '30px'}; */
    row-gap: 32px;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        row-gap: 40px;
    }
`;

export const NavItem = styled.li`
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes[2]};
    line-height: 1.6;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.black[200]};

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.green[200]};
    }
`;

export const SearchIcon = styled(FiSearch)`
    display: block;
    width: 24px;
    height: 24px;
`;
