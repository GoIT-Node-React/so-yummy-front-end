import styled from '@emotion/styled';

export const SearchedRecipes = styled.ul`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style: none;
  }
`;

export const SearchedRecipesListItem = styled.li`
  @media (max-width: 767.98px) {
    position: relative;
    margin-bottom: 28px;
  }
`;

export const SearchedRecipesItemImage = styled.img`
  @media (max-width: 767.98px) {
    width: 343px;
    height: 323px;

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
`;
