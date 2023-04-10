import styled from '@emotion/styled';
import bg from 'images/auth-background-image.svg';
import bottomBackgroundMobile from 'images/auth-bottom-bg-mobile.webp';
import bottomBackgroundTablet from 'images/auth-bottom-bg-tablet.webp';
import bottomBackgroundDesktop from 'images/auth-bottom-bg-desktop.webp';
import { Container } from 'components/common/Container.styled';

export const AuthPage = styled.section`
  --background-image-bottom: url(${bottomBackgroundMobile});

  display: flex;
  min-height: 100%;
  max-height: fit-content;
  width: 100%;

  background-image: var(--background-image-bottom);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 490px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    --background-image-bottom: url(${bottomBackgroundTablet});

    background-position: auto;
    background-size: 100% 606px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --background-image-bottom: url(${bottomBackgroundDesktop});

    background-position: bottom;
    background-size: 100% 325px;
  }
`;

export const AuthContainer = styled(Container)`
  min-height: 100%;
  padding-top: 305px;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center 87px;
  background-size: 285px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;

    padding-top: 444px;
    padding-bottom: 120px;

    background-position: center 96px;
    background-size: 409px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    align-items: center;
    justify-content: flex-end;

    padding-top: 0;
    padding-right: 180px;
    padding-bottom: 0px;

    background-position: 113px 115px;
    background-size: 532px;
  }
`;

export const AuthContent = styled.div`
  width: 100%;
  max-width: 500px;

  text-align: center;
`;
