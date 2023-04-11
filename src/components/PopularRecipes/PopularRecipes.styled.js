import styled from '@emotion/styled';

export const PopularRecipesContainer = styled.div`
  margin-top: 72px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin-top: 100px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    margin-top: 100px;
  }
`;

export const RecipesList = styled.ul`
  margin-top: 32px;

  list-style: none;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    display: block;
  }
`;
