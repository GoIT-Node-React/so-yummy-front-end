import styled from '@emotion/styled';
import { ReactComponent as CloseBtnSvg } from '../../../images/close-popup-btn.svg';

export function CloseBtn({ onClose }) {
    return (
        <CloseButton onClick={onClose}>
            <CloseBtnSvg width={32} height={32} />
        </CloseButton>
    );
}

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //TODO будут обои
    background-color: ${props => props.theme.colors.white[100]};

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        padding: 18px 32px;
    }
`;

const CloseButton = styled.button`
    display: block;
    position: absolute;
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    background-color: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    text-align: inherit;
    text-decoration: none;
    cursor: pointer;

    top: 22px;
    right: 16px;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        top: 24px;
        right: 32px;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 22px;
    left: 16px;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        top: 18px;
        right: 32px;
    }
`;

export const ThemeTogglerWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;

    bottom: 18px;
    left: 16px;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        bottom: 32px;
        left: 32px;
    }
`;
