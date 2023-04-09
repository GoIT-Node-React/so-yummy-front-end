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
    --background-image: url(${mainBgMobile});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    height: 100vh;

    padding: 0 35px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 58.58%,
            rgba(0, 0, 0, 0.345172) 78.98%,
            rgba(0, 0, 0, 0) 100%
        ),
        var(--background-image);

    @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        --background-image: url(${mainBgMobile2x});
    }

    @media screen and (min-width: ${theme.breakpoints[1]}) {
        --background-image: url(${mainBgTablet});

        padding: 0 135px;

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            --background-image: url(${mainBgTablet2x});
        }
    }

    @media screen and (min-width: ${theme.breakpoints[2]}) {
        --background-image: url(${mainBgDesktop});

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            --background-image: url(${mainBgDesktop2x});
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

    max-width: 305px;
    margin: 0 auto;
    margin-bottom: 44px;

    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.fontSizes[4]};
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.white[200]};

    text-align: center;

    @media screen and (min-width: ${theme.breakpoints[1]}) {
        max-width: 505px;
        margin-bottom: 40px;

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

    padding: 12px 24px;

    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 21px;
    text-decoration: none;

    @media screen and (min-width: ${theme.breakpoints[1]}) {
        font-size: ${({ theme }) => theme.fontSizes[4]};
        line-height: ${({ theme }) => theme.fontSizes[5]};
        padding: 22px 45px;
    }

    color: rgb(255, 255, 255);

    background-color: ${({ look }) =>
        look === 'rounded' ? 'transparent' : '#8baa36'};
    border-radius: 24px 44px;
    border: ${({ look }) =>
        look === 'rounded' ? '1px solid rgb(250, 250, 250)' : 'none'};

    transition: ${({ theme }) =>
        theme.transitions.create([
            'color',
            'background-color',
            'border-color',
        ])};

    :hover,
    :focus {
        color: ${({ look }) => (look === 'rounded' ? '#8BAA36' : '#FAFAFA')};
        background-color: ${({ look }) =>
            look === 'rounded' ? 'transparent' : '#22252a'};
        border-color: ${({ look }) =>
            look === 'rounded' ? '#8BAA36' : 'none'};
    }
`;
