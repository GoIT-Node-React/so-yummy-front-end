import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 72px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 104px;
  }
`;

export const SearchedRecipesListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
