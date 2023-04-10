import styled from '@emotion/styled';

export const NotFoundRecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundRecipeImage = styled.picture`
  margin-bottom: 24px;

  width: 208px;
  height: 133px;

  @media (min-width: 768px) {
    margin-bottom: 32px;

    width: 350px;
    height: 225px;
  }
`;

export const NotFoundRecipeText = styled.p`
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
