import styled from '@emotion/styled';

export const CategoryRecipesWrapper = styled.div`
  position: relative;
`;
export const CategoryRecipesLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const CategoryRecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;

  margin-top: 32px;

  opacity: ${({ isLoading }) => (isLoading ? 0.1 : 1)};

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
