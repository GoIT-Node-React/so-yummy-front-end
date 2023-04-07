import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import mainBgMobile from '../../images/Start/start-1xmob.jpg';
import mainBgMobileRetina from '../../images/Start/start-2xmob.jpg';
import mainBgTablet from '../../images/Start/start-1xtab.jpg';
import mainBgTabletRetina from '../../images/Start/start-2xtab.jpg';
import mainBgDesktop from '../../images/Start/start-1xdesc.jpg';
import mainBgDesktopRetina from '../../images/Start/start-2xdesc.jpg';

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 44px;
  svg {
    width: 54px;
    height: 54px;
    @media screen and (min-width: ${theme.breakpoints[1]}) {
      width: 68px;
      height: 68px;
    }
  }
`;
export const Main = styled.div`
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts};
  font-style: normal;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 35px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgMobileRetina});
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgTabletRetina});
    }
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgDesktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg),
        url(${mainBgDesktopRetina});
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white[200]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: ${({ theme }) => theme.fontSizes[5]};
  letter-spacing: -0.02em;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[6]};
    line-height: ${({ theme }) => theme.fontSizes[6]};
  } ;
`;

export const Subtitle = styled.p`
  display: flex;
  margin-bottom: 20px;
  text-align: center;
  max-width: 305px;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.fontSizes[4]};

  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.white[200]};
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    max-width: 505px;
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: ${({ theme }) => theme.fontSizes[5]};
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    max-width: 540px;
  } ;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    gap: 18px;
  } ;
`;

export const ButtonWelcome = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ look, size }) => {
    if (size) {
      return size;
    }
    switch (look) {
      case 'rounded':
        return '22px 45px';
      case 'rounded_dark':
        return '22px 45px';
    }
  }};
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  line-height: 21px;
  color: ${({ look }) =>
    look === 'rounded' || look === 'rounded-dark'
      ? 'rgb(255, 255, 255)'
      : '#fafafa'};
  background-color: ${({ look }) => {
    switch (look) {
      case 'subscribe':
        return '#8baa36';
      case 'subscribe_dark':
        return '#1E1F28';
      case 'rounded':
        return 'transparent';
      case 'rounded_dark':
        return '#8baa36';
      case 'logout':
        return '#8baa36';
      case 'cancel':
        return '#D9D9D9';
      default:
        return '#22252a';
    }
  }};
  border: ${({ look }) =>
    look === 'rounded' || look === 'rounded-dark'
      ? '1px solid rgb(250, 250, 250)'
      : '1px solid transparent'};
  border-radius: ${({ look }) =>
    look === 'rounded' || look === 'rounded-dark' ? '24px 44px' : '6px'};
  // border-radius: 6px;
  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;
  @media screen and (min-width: 768px) {
    font-size: ${({ fontSizeTablet }) =>
      fontSizeTablet ? fontSizeTablet : '16px'};
    padding: ${({ look, sizeTablet }) => {
      if (sizeTablet) {
        return sizeTablet;
      }
      switch (look) {
        case 'subscribe':
          return '21px 138px';
        case 'subscribe_dark':
          return '21px 138px';
        case 'rounded':
          return '50px 42px';
        case 'rounded_dark':
          return '50px 42px';
        case 'logout':
          return '21px 39px';
        case 'cancel':
          return '21px 39px';
        default:
          return '#22252a';
      }
    }};
  }
  :hover,
  :focus {
    background-color: ${({ look }) => {
      switch (look) {
        case 'subscribe':
          return '#8baa36';
        case 'subscribe_dark':
          return '#1E1F28';
        case 'rounded':
          return '#8baa36';
        case 'rounded_dark':
          return '#22252a';
        case 'logout':
          return '#22252a';
        case 'cancel':
          return '#ffffff';
        default:
          return '#22252a';
      }
    }};
    color: ${({ look }) => {
      switch (look) {
        case 'rounded':
          return '#fafafa';
        case 'rounded_dark':
          return '#fafafa';
        case 'logout':
          return '#fafafa';
        case 'subscribe_dark':
          return '#8baa36';
        default:
          return '#22252a';
      }
    }};
  }
`;
