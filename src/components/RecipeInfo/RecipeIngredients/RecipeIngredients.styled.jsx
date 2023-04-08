import styled from '@emotion/styled';

export const RecipeIngredientsTable = styled.section`
  --header-ingredients-grow: 1;
  --header-number-width: 80px;
  --header-favorite-width: 60px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --header-number-width: 154px;
    --header-favorite-width: 100px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --header-number-width: 296px;
  }
`;

export const RecipeIngredientsHeader = styled.div`
  --header-padding: 13px 14px 14px;

  display: flex;

  width: 100%;
  margin-bottom: 24px;
  padding: var(--header-padding);

  font-weight: 600;
  font-size: 10px;
  line-height: calc(15 / 10);
  letter-spacing: 0.03em;

  color: ${({ theme }) => theme.colors.white[200]};

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.green[200]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --header-padding: 16px 32px 17px;

    margin-bottom: 32px;

    font-size: 18px;
    line-height: calc(27 / 18);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --header-padding: 16px 40px 17px;

    margin-bottom: 50px;
  }
`;

export const RecipeIngredientsHeaderItem = styled.span`
  display: block;
  &:nth-of-type(1) {
    flex-grow: var(--header-ingredients-grow);
  }
  &:nth-of-type(2) {
    width: var(--header-number-width);
    text-align: center;
  }
  &:nth-of-type(3) {
    width: var(--header-favorite-width);

    text-align: center;
  }
`;

export const RecipeIngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
