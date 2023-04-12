import styled from '@emotion/styled';
import { ReactComponent as CloseBtnSvg } from '../../../images/close-popup-btn.svg';

import SpinachMobile1x from '../../../images/spinach-main-bg/spinach-popup-mobile-1x.webp';
import SpinachMobile2x from '../../../images/spinach-main-bg/spinach-popup-mobile-2x.webp';
import SpinachTablet1x from '../../../images/spinach-main-bg/spinach-popup-tablet-1x.webp';
import SpinachTablet2x from '../../../images/spinach-main-bg/spinach-popup-tablet-2x.webp';

export function CloseBtn({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <CloseBtnSvg width={32} height={32} />
    </CloseButton>
  );
}

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.green[100]};
  background-image: url('${SpinachMobile1x}');
  background-repeat: no-repeat;

  background-position: right -250px bottom -70px;
  background-size: 550px 360px;
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${SpinachMobile2x}');
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 18px 32px;
    background-image: url('${SpinachTablet1x}');
    background-position: right -380px bottom -310px;
    background-size: 940px 700px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${SpinachTablet2x}');
    }
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
  display: none;
  align-items: center;
  position: absolute;

  bottom: 18px;
  left: 16px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    bottom: 32px;
    left: 32px;
  }
`;
