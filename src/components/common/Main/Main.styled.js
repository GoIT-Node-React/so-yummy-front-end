import styled from '@emotion/styled';
import MobilePoints from 'images/spinach-main-bg/mobile-points.svg';
import TabletPoints from 'images/spinach-main-bg/tablet-points.svg';
import DesctopPoints from 'images/spinach-main-bg/desctop-points.svg';

export const MainContainer = styled.main`
  margin: 0 auto;
  width: 375px;
  flex-grow: 1;

  background-image: url(${MobilePoints});
  background-size: 230px 74px;
  background-repeat: no-repeat;
  background-position: top 12px right 16px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${MobilePoints});
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 768px;
    background-image: url(${TabletPoints});
    background-size: 525px 86px;
    background-position: top 21px right 20px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${TabletPoints});
    }
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 1440px;
    background-image: url(${DesctopPoints});
    background-size: 930px 100px;
    background-position: top 53px right 165px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${DesctopPoints});
    }
  }
`;
