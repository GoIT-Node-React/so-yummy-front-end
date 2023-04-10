import styled from '@emotion/styled';

export const FavoriteRecipesListStyled = styled.ul`
  --list-gap: 18px;

  display: flex;
  flex-direction: column;
  gap: var(--list-gap);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --list-gap: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --list-gap: 50px;
  }
`;
