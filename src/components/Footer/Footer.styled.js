import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import { theme } from '../../theme/theme';

import RigthMobile1x from '../../images/footer/footer-pasta-rigth-1xmob.png';
import RigthMobile2x from '../../images/footer/footer-pasta-rigth-2xmob.png';
import RigthTablet1x from '../../images/footer/footer-pasta-rigth-1xtab.png';
import RigthTablet2x from '../../images/footer/footer-pasta-rigth-2xtab.png';
import RigthDesk1x from '../../images/footer/footer-pasta-rigth-1xdesc.png';
import RigthDesk2x from '../../images/footer/footer-pasta-rigth-2xdesc.png';

import LeftMobile1x from '../../images/footer/footer-pasta-left-1xmob.png';
import LeftMobile2x from '../../images/footer/footer-pasta-left-2xmob.png';
import LeftTablet1x from '../../images/footer/footer-pasta-left-1xtab.png';
import LeftTablet2x from '../../images/footer/footer-pasta-left-2xtab.png';
import LeftDesk1x from '../../images/footer/footer-pasta-left-1xdesc.png';
import LeftDesk2x from '../../images/footer/footer-pasta-left-2xdesc.png';

export const Main = styled.div`
    background-image: url('${RigthMobile1x}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
    background-size: 172px 160px;
    @media screen and (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${RigthMobile2x}');
    }
    @media screen and (min-width: ${theme.breakpoints[1]}) {
        background-image: url('${RigthTablet1x}');
        background-size: 313px 290px;
        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url('${RigthTablet2x}');
        }
    }
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        background-image: url('${RigthDesk1x}');
        background-size: 474px 438px;
        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url('${RigthDesk2x}');
        }
    }
`;

export const FooterWrapper = styled.div`
    position: relative;

    max-width: 100% !important;

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
        margin-bottom: 72px;
        margin-right: 235px;
    }
`;

export const FirstBlock = styled.div``;

export const FeaturesList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    padding-left: 45px;

    @media screen and (max-width: ${theme.breakpoints[1]}) {
        display: none;
    }
    @media screen and (min-width: ${theme.breakpoints[1]}) {
        width: 450px;
        gap: 10px;
    }
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        width: 350px;
        gap: 12px;
    }
`;

export const Feature = styled.li`
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.fontSizes[4]};
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.white[200]};
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        font-size: ${({ theme }) => theme.fontSizes[4]};
        line-height: ${({ theme }) => theme.fontSizes[5]}24px;
        letter-spacing: -0.02em;
    }
`;

export const TitleBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px;
    padding-bottom: 32px;
    justify-content: center;
    @media screen and (min-width: ${theme.breakpoints[1]}) {
        padding-bottom: 24px;
        justify-content: start;
    }
`;

export const Title = styled.h2`
    margin: 0px;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.white[200]};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: ${({ theme }) => theme.fontSizes[4]};
    letter-spacing: 0.015em;
    @media screen and (min-width: ${theme.breakpoints[1]}) {
        margin-left: 12px;
    }
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        font-size: ${({ theme }) => theme.fontSizes[6]};
        line-height: ${({ theme }) => theme.fontSizes[6]};
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
            margin-left: 12px;
        }
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

export const FooterLeftBg = styled.div`
    position: absolute;
    top: -28%;
    left: 0;
    min-width: 320px;
    height: 200px;
    background-image: url('${LeftMobile1x}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
    z-index: -2;
    @media screen and (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${LeftMobile2x}');
    }
    @media screen and (min-width: ${theme.breakpoints[1]}) {
        background-image: url('${LeftTablet1x}');
        top: -38%;
        width: 500px;
        height: 300px;
        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url('${LeftTablet2x}');
        }
    }
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        background-image: url('${LeftDesk1x}');
        top: -68%;
        width: 696px;
        height: 540px;
        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url('${LeftDesk2x}');
        }
    }
`;
