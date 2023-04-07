const { default: styled } = require('@emotion/styled');

export const RecipeIngredient = styled.li`
  display: flex;
  align-items: center;

  padding: 10px 14px 10px 10px;

  background: ${({ theme }) => theme.colors.green[100]};
  border-radius: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 16px 32px 16px 24px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 0 40px 0 32px;
  }
`;

export const RecipeIngredientContainer = styled.div`
  flex-grow: var(--header-ingredients-grow);
  display: flex;
  align-items: center;
`;

export const RecipeIngredientThumb = styled.img`
  --image-size: 65px;
  display: block;

  width: var(--image-size);
  height: var(--image-size);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --image-size: 146px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --image-size: 180px;
  }
`;
export const RecipeIngredientTitle = styled.p`
  margin-left: 8px;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: -0.24px;

  color: ${({ theme }) => theme.colors.gray[500]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 24px;

    font-size: 24px;
    line-height: 1;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: 40px;
  }
`;

export const RecipeIngredietMeasure = styled.div`
  display: flex;
  justify-content: center;

  width: var(--header-number-width);
`;

export const RecipeIngredietMeasureText = styled.p`
  width: fit-content;
  padding: 4px;

  font-weight: 600;
  font-size: 10px;
  line-height: calc(15 / 10);
  text-align: center;

  color: ${({ theme }) => theme.colors.white[200]};

  background: ${({ theme }) => theme.colors.green[200]};
  border-radius: 4px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 4px 8px;

    font-size: 18px;
    line-height: calc(27 / 18);
  }
`;

export const RecipeIngredientFavorite = styled.div`
  display: flex;
  justify-content: center;

  width: var(--header-favorite-width);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

export const RecipeIngredientFavoriteCheckbox = styled.input`
  --checkbox-size: 18px;
  width: var(--checkbox-size);
  height: var(--checkbox-size);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --checkbox-size: 35px;
  }
`;
