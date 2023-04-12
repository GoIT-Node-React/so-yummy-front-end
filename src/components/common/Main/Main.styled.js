import styled from '@emotion/styled';
import MobilePoints from 'images/spinach-main-bg/mobile-points.svg';
import TabletPoints from 'images/spinach-main-bg/tablet-points.svg';
import DesctopPoints from 'images/spinach-main-bg/desctop-points.svg';

export const MainContainer = styled.main`
  margin: 0 auto;
  /* width: 375px; */
  width: 100%;
  flex-grow: 1;

  background-image: ${({ isMainPage }) =>
    isMainPage ? 'none' : `url(${MobilePoints})`};

  background-size: auto 74px;
  background-repeat: no-repeat;
  background-position: calc(50% + 53px) 16px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    background-image: ${({ isMainPage }) =>
      isMainPage ? 'none' : `url(${TabletPoints})`};
    background-size: auto 86px;
    background-position: calc(50% + 98px) 21px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    background-image: ${({ isMainPage }) =>
      isMainPage ? 'none' : `url(${DesctopPoints})`};
    background-size: auto 100px;
    background-position: calc(50% + 78px) 52px;
  }
`;
