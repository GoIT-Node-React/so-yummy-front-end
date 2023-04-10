import styled from '@emotion/styled';
import { Container } from 'components/common/Container.styled';

export const FavoriteRecipesSection = styled.section`
  --section-padding-top: 50px;
  --section-padding-bottom: 100px;
  padding-top: var(--section-padding-top);
  padding-bottom: var(--section-padding-bottom);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --section-padding-top: 72px;
    --section-padding-bottom: 200px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --section-padding-top: 100px;
    --section-padding-bottom: 100px;
  }
`;

export const FavoriteRecipesContainer = styled(Container)``;

export const FavoriteRecipesTitle = styled.h2`
  --title-margin-bottom: 50px;

  margin-bottom: var(--title-margin-bottom);

  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${({ theme }) => theme.colors.gray[400]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --title-margin-bottom: 100px;

    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 44px;
  }
`;
