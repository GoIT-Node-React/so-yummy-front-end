import styled from '@emotion/styled';

import MobileSpinach1x from '../../../images/spinach-main-bg/spinach-mobile-1x.webp';
import MobileSpinach2x from '../../../images/spinach-main-bg/spinach-mobile-2x.webp';
import TabletSpinach1x from '../../../images/spinach-main-bg/spinach-tablet-1x.webp';
import TabletSpinach2x from '../../../images/spinach-main-bg/spinach-tablet-2x.webp';
import DesctopSpinach1x from '../../../images/spinach-main-bg/spinach-desctop-1x.webp';
import DesctopSpinach2x from '../../../images/spinach-main-bg/spinach-desctop-2x.webp';
import MobilePoints from '../../../images/spinach-main-bg/mobile-points.svg';
import TabletPoints from '../../../images/spinach-main-bg/tablet-points.svg';
import DesctopPoints from '../../../images/spinach-main-bg/desctop-points.svg';

export const MainContainer = styled.main`
  margin: 0 auto;
  width: 375px;
  height: 100%;
  background-image: url(${MobileSpinach1x}), url(${MobilePoints});
  background-size: 440px auto, 230px 74px;
  background-repeat: no-repeat;
  background-position: right calc(100% + 120px) bottom -260px,
    top 12px right 16px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${MobileSpinach2x});
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 768px;
    background-image: url(${TabletSpinach1x}), url(${TabletPoints});
    background-size: 690px auto, 525px 86px;
    background-position: right calc(100% + 190px) bottom -360px,
      top 21px right 20px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${TabletSpinach2x});
    }
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 1440px;
    background-image: url(${DesctopSpinach1x}), url(${DesctopPoints});
    background-size: 820px auto, 930px 100px;
    background-position: right calc(100% + 180px) bottom -440px,
      top 53px right 165px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${DesctopSpinach2x});
    }
  }
`;
