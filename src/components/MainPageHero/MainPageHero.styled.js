import styled from '@emotion/styled';
import { Container as StyledContainer } from '../common/Container.styled';
import { NavLink } from 'react-router-dom';

import heroRightDesktop from 'images/main-hero/hero-right-desktop.webp';
import heroRightDesktop2x from 'images/main-hero/hero-right-desktop@2x.webp';
import heroRightTablet from 'images/main-hero/hero-right-tablet.webp';
import heroRightTablet2x from 'images/main-hero/hero-right-tablet@2x.webp';
import heroRightMobile from 'images/main-hero/hero-right-mobile.webp';
import heroRightMobile2x from 'images/main-hero/hero-right-mobile@2x.webp';

import heroLeftDesktop from 'images/main-hero/hero-left-desktop.webp';
import heroLeftDesktop2x from 'images/main-hero/hero-left-desktop@2x.webp';
import heroLeftTablet from 'images/main-hero/hero-left-tablet.webp';
import heroLeftTablet2x from 'images/main-hero/hero-left-tablet@2x.webp';
import heroLeftMobile from 'images/main-hero/hero-left-mobile.webp';
import heroLeftMobile2x from 'images/main-hero/hero-left-mobile@2x.webp';

export const SectionHero = styled.section`
  margin-top: -64px;
  width: 100%;
  height: 777px;

  background-image: url(${heroLeftMobile}), url(${heroRightMobile});
  background-size: 58px auto, 375px auto;
  background-position: 0px 0px, 100% 58px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroLeftMobile2x}), url(${heroRightMobile2x});
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    height: 640px;

    background-image: url(${heroLeftTablet}), url(${heroRightTablet});
    background-size: 58px auto, 580px auto;
    background-position: 0px 0px, top right;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroLeftTablet2x}), url(${heroRightTablet2x});
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    height: 800px;

    background-image: url(${heroLeftDesktop}), url(${heroRightDesktop});
    background-size: 110px auto, 907px auto;
    background-position: 0px 0px, top right;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroLeftDesktop2x}), url(${heroRightDesktop2x});
    }
  }
`;

export const Container = styled(StyledContainer)`
  position: relative;
  padding-top: 132px;
  position: relative;

  height: 100%;
  padding-top: 132px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    padding-top: 205px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    padding-top: 226px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 14px;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1;
  color: ${props => props.theme.colors.black[200]};
  font-size: 60px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    text-align: left;
    margin-bottom: 24px;
    font-size: 72px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-bottom: 8px;
    font-size: 100px;
  }
`;

export const DecorTitleText = styled.span`
  color: ${props => props.theme.colors.green[200]};
`;

export const Text = styled.p`
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 364px;
  width: 266px;
  margin-left: auto;
  margin-right: auto;

  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: 1.29;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    text-align: left;
    margin-bottom: 32px;
    padding-left: 6px;
    width: 364px;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[4]};
    line-height: 1.33;
    margin-bottom: 50px;
    width: 467px;
    padding-left: 7px;
  }
`;

export const TipBox = styled.div`
  position: absolute;
  top: 435px;
  right: 34px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  min-height: 92px;
  padding: 8px 8px 8px 8px;
  width: 229px;
  background-color: ${props => props.theme.colors.white[100]};
  border-radius: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    position: absolute;
    height: 100px;
    top: 372px;
    right: 32px;
    width: 268px;
    padding: 12px 12px 12px 12px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: 16px 16px 16px 16px;
    width: 298px;
    top: 472px;
    right: 122px;
    height: 114px;
  }
`;

export const TipBoxText = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: 1.5;

  color: ${props => props.theme.colors.gray[500]};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[2]};
    line-height: 1.29;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    line-height: 1.43;
  }
`;

export const DecorTipBoxText = styled.span`
  color: ${props => props.theme.colors.green[200]};
`;

export const TipBoxLink = styled(NavLink)`
  color: ${props => props.theme.colors.gray[500]};
  width: 100%;
  display: flex;
  justify-content: end;
  margin-right: auto;
  column-gap: 7px;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green[200]};
  }
`;

export const TipBoxLinkText = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: 120%;

  letter-spacing: 0.2px;
  color: inherit;
`;

export const DecorArrowIcon = () => {
  return (
    <svg
      width="14"
      height="12"
      fill="currentColor"
      viewBox="0 0 14 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6H13M13 6L8.5 1.5M13 6L8.5 10.5"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
