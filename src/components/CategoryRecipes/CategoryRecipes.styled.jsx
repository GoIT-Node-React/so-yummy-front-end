import styled from '@emotion/styled';

export const CategoryRecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;

  margin-top: 32px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 50px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    row-gap: 100px;
    column-gap: 14px;
  }
`;

export const CategoryRecipesItem = styled.li`
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: calc((100% - 14px * 3) / 4);
  }
`;
