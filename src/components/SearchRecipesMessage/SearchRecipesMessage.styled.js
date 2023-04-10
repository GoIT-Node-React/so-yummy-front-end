import styled from '@emotion/styled';

export const SearchRecipesMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchRecipesMessageImage = styled.picture`
  margin-bottom: 24px;

  width: 208px;
  height: 133px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 32px;

    width: 350px;
    height: 225px;
  }
`;

export const SearchRecipesMessageText = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${({ theme }) => theme.colors.black[100]};
  opacity: 0.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;
