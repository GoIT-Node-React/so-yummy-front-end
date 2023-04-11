import styled from '@emotion/styled';

export const SearchedRecipes = styled.ul`
  display: flex;
  gap: 28px;

  padding: 0;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 0.2px)) {
    flex-direction: column;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    flex-wrap: wrap;

    row-gap: 32px;
    column-gap: 32px;

    margin-bottom: 50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-wrap: wrap;
    row-gap: 100px;
    column-gap: 14px;

    margin-bottom: 50px;
  }
`;

export const SearchedRecipesListItem = styled.li`
  position: relative;
  cursor: pointer;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 0.2px)) {
    width: 343px;
    height: 323px;
  }

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    width: 336px;
    height: 323px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 299px;
    height: 323px;
  }
`;
