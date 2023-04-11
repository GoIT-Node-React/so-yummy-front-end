import styled from '@emotion/styled';
import { Container as StyledContainer } from '../common/Container.styled';
import { NavLink } from 'react-router-dom';
import BackMob1x from '../../images/main-hero/back-mob-1x.webp';
import BackMob2x from '../../images/main-hero/back-mob-2x.webp';
import BackTabl1x from '../../images/main-hero/back-tabl-1x.webp';
import BackTabl2x from '../../images/main-hero/back-tabl-2x.webp';
import BackDesk1x from '../../images/main-hero/back-desk-1x.webp';
import BackDesk2x from '../../images/main-hero/back-desk-2x.webp';

export const SectionHero = styled.section`
    margin-top: -64px;
    width: 100%;
    height: 777px;
    /* padding-top: 132px; */

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        height: 640px;
        /* padding-top: 204px; */
    }
    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        height: 800px;
        /* padding-top: 226px; */
    }
`;

export const Container = styled(StyledContainer)`
    position: relative;
    padding-top: 132px;
    background-color: ${props => props.theme.colors.white[200]};
    background-image: image-set(url(${BackMob1x}) 1x, url(${BackMob2x}) 2x);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top 0px left 0px;
    position: relative;
    height: 100%;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        padding-top: 205px;
        background-image: image-set(
            url(${BackTabl1x}) 1x,
            url(${BackTabl2x}) 2x
        );
        background-position: top 0px left 0px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        padding-top: 230px;
        background-image: image-set(
            url(${BackDesk1x}) 1x,
            url(${BackDesk2x}) 2x
        );
        background-position: top 0px left 0px;
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
