import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export const NavBar = styled.ul`
  margin-right: ${props => props.mr};

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
  font-size: ${props => props.theme.fontSizes[4]};
  line-height: 1;
  letter-spacing: -0.02em;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[5]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[2]};
    line-height: 1.6;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.black[400]};

  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &.active,
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green[200]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    color: ${props => props.theme.colors.black[200]};
  }
`;

export const SearchIcon = styled(FiSearch)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
