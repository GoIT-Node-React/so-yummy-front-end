import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../../theme/theme';
import mainBgMobile from '../../images/Start/start-1xmob.jpg';
import mainBgMobile2x from '../../images/Start/start-2xmob.jpg';
import mainBgTablet from '../../images/Start/start-1xtab.jpg';
import mainBgTablet2x from '../../images/Start/start-2xtab.jpg';
import mainBgDesktop from '../../images/Start/start-1xdesc.jpg';
import mainBgDesktop2x from '../../images/Start/start-2xdesc.jpg';

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fonts};
  font-style: normal;

  padding: 0 35px;

  background-size: cover;
  background-widh: 100wh;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${mainBgMobile});
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
      url(${mainBgMobile2x});
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding: 0 135px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${mainBgTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${mainBgTablet2x});
    }
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${mainBgDesktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${mainBgDesktop2x});
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
  margin: 0 auto;
  display: flex;
  margin-bottom: 44px;
  text-align: center;
  max-width: 305px;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.fontSizes[4]};

  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.white[200]};
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 40px;
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

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts};
  font-style: normal; 
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  text-decoration: none;
  line-height: 21px;
  padding: 12px 24px;

   @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: ${({ theme }) => theme.fontSizes[5]};
    padding: 22px 45px;
  };

  color: rgb(255, 255, 255);
  
  background-color: ${({ look }) =>
    look === 'rounded' ? 'transparent' : '#8baa36'};
  border-radius: 24px 44px;
  border: ${({ look }) =>
    look === 'rounded' ? '1px solid rgb(250, 250, 250)' : 'none'};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  :hover,
  :focus {
    color: ${({ look }) => (look === 'rounded' ? '#8BAA36' : '#FAFAFA')};
    background-color: ${({ look }) =>
      look === 'rounded' ? 'transparent' : '#22252a'};
    border-color: ${({ look }) => (look === 'rounded' ? '#8BAA36' : 'none')};
      }
    }};
  }
`;