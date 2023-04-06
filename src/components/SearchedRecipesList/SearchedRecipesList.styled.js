import styled from '@emotion/styled';

export const SearchedRecipes = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  list-style: none;

  @media (max-width: 767.98px) {
    flex-direction: column;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    flex-wrap: wrap;
    margin-bottom: 50px;
  }

  @media (min-width: 1440px) and (max-width: 1439.98px) {
    margin-bottom: 0;
  }
`;

export const SearchedRecipesListItem = styled.li`
  @media (max-width: 767.98px) {
    position: relative;
    width: 343px;
    height: 323px;

    &:not(:last-child) {
      margin-bottom: 28px;
    }
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    position: relative;
    width: calc((100% - 32px) / 2);

    &:nth-child(odd) {
      margin-right: 32px;
    }

    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }

    margin-bottom: 32px;
  }
`;

export const SearchedRecipesItemImage = styled.img`
  @media (max-width: 767.98px) {
    width: 343px;
    height: 323px;
    border-radius: 8px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 100%;
    border-radius: 8px;
  }
`;

export const SearchedRecipesItemTitle = styled.p`
  @media (max-width: 767.98px) {
    position: absolute;
    left: 18px;
    bottom: 18px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: #ffffff;
    border-radius: 8px;
    padding: 16px;

    width: 307px;
    height: 52px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 0.8px;

    letter-spacing: -0.24px;
    color: #3e4462;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    position: absolute;
    left: 18px;
    bottom: 18px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: #ffffff;
    border-radius: 8px;
    padding: 16px;

    width: 300px;
    height: 52px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 0.8px;

    letter-spacing: -0.24px;
    color: #3e4462;
  }
`;
