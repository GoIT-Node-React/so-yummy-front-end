import styled from '@emotion/styled';

export const SearchedRecipes = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  padding: 0;

  @media (max-width: 767.98px) {
    flex-direction: column;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    flex-wrap: wrap;
    margin-bottom: 50px;
  }

  @media (min-width: 1440px) {
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
`;

export const SearchedRecipesListItem = styled.li`
  position: relative;

  @media (max-width: 767.98px) {
    width: 343px;
    height: 323px;

    &:not(:last-child) {
      margin-bottom: 28px;
    }
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: calc((100% - 32px) / 2);

    &:nth-child(odd) {
      margin-right: 32px;
    }

    margin-bottom: 32px;

    &:nth-last-child((-n + 2)) {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1440px) {
    width: calc((100% - 41px) / 4);

    margin-right: 12px;
    margin-bottom: 100px;

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`;

export const SearchedRecipesItemImage = styled.img`
  border-radius: 8px;

  @media (max-width: 767.98px) {
    width: 343px;
    height: 323px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 100%;
    height: 323px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    height: 323px;
  }
`;

export const SearchedRecipesItemTitle = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  left: 18px;
  bottom: 18px;

  padding: 16px;

  background-color: ${({ theme }) => theme.colors.white[100]};
  border-radius: 8px;

  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 0.8px;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.gray[500]};

  @media (max-width: 767.98px) {
    width: 307px;
    height: 52px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 300px;
    height: 52px;
  }

  @media (min-width: 1440px) {
    left: 16px;
    bottom: 16px;

    width: 268px;
    height: 60px;
  }
`;
