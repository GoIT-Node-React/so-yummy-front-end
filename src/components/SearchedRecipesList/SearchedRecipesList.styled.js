import styled from '@emotion/styled';

export const SearchedRecipes = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;

  padding: 0;

  /* @media (max-width: 767.98px) {
    flex-direction: column;
    margin-bottom: 40px;
  } */

  @media (max-width: calc(${({ theme }) => theme.breakpoints[1]} - 0.2px)) {
    flex-direction: column;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    flex-wrap: wrap;
    gap: 32px;

    margin-bottom: 50px;
  }

  @media (min-width: 1440px) {
    flex-wrap: wrap;
    row-gap: 100px;
    column-gap: 14px;
  }
`;

export const SearchedRecipesListItem = styled.li`
  position: relative;

  @media (max-width: 767.98px) {
    width: 343px;
    height: 323px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: calc((100% - 32px) / 2);
  }

  @media (min-width: 1440px) {
    width: calc((100% - 14px * 3) / 4);
  }
`;
