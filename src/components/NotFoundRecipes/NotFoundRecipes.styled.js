import styled from '@emotion/styled';

export const NotFoundRecipesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 100px;

  @media (min-width: 768px) {
    margin-bottom: 200px;
  }
`;

export const NotFoundRecipesImage = styled.img`
  margin-bottom: 24px;

  width: 208px;
  height: 133px;

  @media (min-width: 768px) {
    margin-bottom: 32px;

    width: 350px;
    height: 225px;
  }
`;

export const NotFoundRecipesText = styled.p`
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${({ theme }) => theme.colors.black[100]};
  opacity: 0.5;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;
