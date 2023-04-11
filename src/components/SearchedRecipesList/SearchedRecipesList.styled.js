import styled from '@emotion/styled';

export const SearchedRecipes = styled.ul`
  display: flex;
  gap: 28px;

  padding: 0;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 0.2px)) {
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    flex-wrap: wrap;
    gap: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-wrap: wrap;
    row-gap: 100px;
    column-gap: 14px;
  }
`;

export const SearchedRecipesListItem = styled.li`
  position: relative;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 0.2px)) {
    width: 343px;
    height: 323px;
  }

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    width: calc((100% - 32px) / 2);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: calc((100% - 14px * 3) / 4);
  }
`;
