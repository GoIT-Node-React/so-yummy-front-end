import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import { theme } from '../../theme/theme';

import SpinachMobile1x from 'images/spinach-main-bg/spinach-footer-mobile-1x.webp';
import SpinachMobile2x from 'images/spinach-main-bg/spinach-footer-mobile-2x.webp';
import SpinachTablet1x from 'images/spinach-main-bg/spinach-footer-tablet-1x.webp';
import SpinachTablet2x from 'images/spinach-main-bg/spinach-footer-tablet-2x.webp';
import SpinachDesk1x from 'images/spinach-main-bg/spinach-footer-desctop-1x.webp';
import SpinachDesk2x from 'images/spinach-main-bg/spinach-footer-desctop-2x.webp';

import MobileSpinach1x from 'images/spinach-main-bg/spinach-mobile-1x.webp';
import MobileSpinach2x from 'images/spinach-main-bg/spinach-mobile-2x.webp';
import TabletSpinach1x from 'images/spinach-main-bg/spinach-tablet-1x.webp';
import TabletSpinach2x from 'images/spinach-main-bg/spinach-tablet-2x.webp';
import DesctopSpinach1x from 'images/spinach-main-bg/spinach-desctop-1x.webp';
import DesctopSpinach2x from 'images/spinach-main-bg/spinach-desctop-2x.webp';

export const FooterContainer = styled.footer`
  position: relative;
  /* width: 375px; */
  width: 100%;
  margin: auto auto 0;

  /* @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 768px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 1440px;
  } */

  background-image: url('${SpinachMobile1x}');
  background-repeat: no-repeat;

  background-position: right -40px bottom -90px;
  background-size: 210px 250px;
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${SpinachMobile2x}');
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    background-image: url('${SpinachTablet1x}');
    background-position: right -80px bottom -140px;
    background-size: 410px 380px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${SpinachTablet2x}');
    }
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    background-image: url('${SpinachDesk1x}');
    background-position: right -70px bottom -200px;
    background-size: 570px 530px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${SpinachDesk2x}');
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    z-index: -1;

    display: block;

    width: 300px;
    height: 300px;

    background-image: url(${MobileSpinach1x});
    background-size: 440px auto;
    background-repeat: no-repeat;
    background-position: -120px calc(100% + 235px);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${MobileSpinach2x});
    }

    @media screen and (min-width: calc(${({ theme }) =>
        theme.breakpoints[1]} - 1px)) {
      background-image: url(${TabletSpinach1x});
      background-size: 690px auto;
      background-position: -200px calc(100% + 370px);

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${TabletSpinach2x});
      }
    }

    @media screen and (min-width: calc(${({ theme }) =>
        theme.breakpoints[2]} - 1px)) {
      background-image: url(${DesctopSpinach1x});
      background-size: 820px auto;
      background-position: -200px -155px;

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${DesctopSpinach2x});
      }
    }
  }
`;

export const Main = styled.div`
  margin-top: auto;

  /* background-image: url('${SpinachMobile1x}');
  background-repeat: no-repeat;

  background-position: right -40px bottom -90px;
  background-size: 210px 250px;
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${SpinachMobile2x}');
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    background-image: url('${SpinachTablet1x}');
    background-position: right -80px bottom -140px;
    background-size: 410px 380px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${SpinachTablet2x}');
    }
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    background-image: url('${SpinachDesk1x}');
    background-position: right -70px bottom -200px;
    background-size: 570px 530px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${SpinachDesk2x}');
    }
  } */
`;

export const FooterWrapper = styled.div`
  position: relative;

  margin: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  padding-bottom: 18px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[400]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding: 0 32px;
    flex-direction: column;
    padding-right: 94px;
    padding-top: 50px;
    padding-bottom: 24px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 64px;
    padding-bottom: 50px;
  }
`;

export const FooterMain = styled.div`
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterMainBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    margin-bottom: 72px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 650px;

    align-items: flex-start;
    margin-bottom: 41px;
    margin-right: 235px;
  }
`;

export const FirstBlock = styled.div``;

export const FeaturesList = styled.ul`
  @media screen and (max-width: ${theme.breakpoints[1]}) {
    display: none;
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 450px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    padding-left: 5px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 418px;
    margin-left: 8px;
    gap: 12px;
  }
`;

export const Feature = styled.li`
  display: flex;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.fontSizes[4]};
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.white[200]};

    &::before {
      margin-right: 12px;
      margin-top: 6px;
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;

      background-color: ${({ theme }) => theme.colors.white[200]};
    }
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: 1.33;
    letter-spacing: -0.02em;

    &::before {
      margin-top: 8px;
      width: 6px;
      height: 6px;
    }
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  margin-bottom: 32px;
  justify-content: center;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    justify-content: flex-start;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    justify-content: flex-start;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  margin: 0px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.white[200]};

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 1;
  letter-spacing: 0.015em;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[6]};
    margin-left: 12px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[6]};
  }
`;

export const SvgWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  margin-left: 8px;
  svg {
    width: 32px;
    height: 32px;
    @media screen and (min-width: ${theme.breakpoints[1]}) {
      width: 44px;
      height: 44px;
    }
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-left: 0;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const FooterNavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  margin-bottom: 32px;
  width: 89px;
  align-items: center;
  gap: 14px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 0px;
    align-items: start;
    gap: 20px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    gap: 24px;
  }
`;

export const LinkFooter = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white[200]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.fontSizes[4]};
  letter-spacing: -0.02em;
  text-decoration: none;

  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &.active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.green[200]};
  }
`;

export const DownContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: 28px 73px;

  & > :first-of-type {
    margin-right: 14px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
  & span {
    font-family: inherit;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: ${({ theme }) => theme.fontSizes[0]};
    letter-spacing: -0.01em;
    text-align: left;
    opacity: 0.5;
  }
  @media only screen and (min-width: ${theme
      .breakpoints[1]}) and (max-width: ${theme.breakpoints[2]}) {
    height: 78px;
    & > :first-of-type {
      margin-right: 28px;
    }
    & span {
      font-size: 14px;
      line-height: 14px;
    }
  }
  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    height: 114px;
    & span {
      font-size: 14px;
      line-height: 14px;
    }
    & > :first-of-type {
      margin-right: 40px;
    }
  }
`;
