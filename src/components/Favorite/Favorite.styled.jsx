import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const FavoriteContainer = styled.div`
margin-top: 48px;

@media screen and (min-width: calc(${theme.breakpoints[1]}-1px)) {
  margin-top: 74px;
}
@media screen and (min-width: ${theme.breakpoints[2]} {
  margin-top: 100px;
`;

export const FavoriteList = styled.ul`
  margin-bottom: 50px;
  li:last-child {
    margin-bottom: 0px;
  }

  @media screen and (min-width: calc(${theme.breakpoints[1]} - 1px)) {
    display: block !important;
    margin-top: 100px;
  }
  @media screen and (min-width: calc(${theme.breakpoints[2]} - 1px)) {
    margin-top: 100px;
    display: block;
  }
`;

export const FavoriteTitle = styled.h2`
  padding-top: 50px;

  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: ${({ theme }) => theme.fontSizes[6]};

  // font-weight: 600;
  // font-size: 28px;
  // line-height: 1;

  letter-spacing: -0.02em;

  @media screen and (min-width: calc(${theme.breakpoints[1]} - 1px)) {
    font-size: 32px;
    padding-top: 72px;
  }

  @media screen and (min-width: calc(${theme.breakpoints[2]} - 1px)) ) {
    font-size: 44px;
    padding-top: 100px;
  }
`;

export const FavoriteItem = styled.li`
  margin-bottom: 18px;

  @media screen and (min-width: calc(${theme.breakpoints[1]} - 1px)) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: calc(${theme.breakpoints[2]} - 1px)) {
    margin-bottom: 50px;
  }
`;
