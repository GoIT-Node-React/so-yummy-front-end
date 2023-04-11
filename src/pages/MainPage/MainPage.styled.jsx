import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainPageSection = styled.section`
  height: fit-content;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 72px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 100px;
  }
`;

export const MainPageTitle = styled.h2`
  margin-bottom: 50px;

  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #001833;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 50px;

    font-size: 44px;
  }
`;

export const MainPageCategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 50px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 100px;
  }
`;

export const MainPageCategoriesItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 50px;
  }
`;

export const SeeAllButton = styled(Link)`
  margin-left: auto;

  padding: 10px 24px;

  font-size: 14px;
  line-height: calc(18 / 14);

  color: ${({ theme }) => theme.colors.white[200]};

  background-color: ${({ theme }) => theme.colors.green[200]};
  border-radius: 6px;

  transition: ${({ theme }) => theme.transitions.create(['background-color'])};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.black[400]};
  }
`;

export const MainPageRecipesList = styled.ul`
  display: flex;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 14px;
  }
`;

export const MainPageRecipesItem = styled.li`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

export const MainPageOtherCategoriesButton = styled(Link)`
  cursor: pointer;

  display: block;

  width: fit-content;
  padding: 14px 32px;
  margin: 50px auto 0;

  font-size: 14px;
  line-height: calc(21 / 14);
  color: ${({ theme }) => theme.colors.black[400]};

  background-color: transparent;
  border-radius: 24px 44px;
  box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.green[200]};

  transition: ${({ theme }) =>
    theme.transitions.create(['background-color', 'box-shadow', 'color'])};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white[200]};

    background-color: ${({ theme }) => theme.colors.green[200]};
    box-shadow: none;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 20px 52px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;
