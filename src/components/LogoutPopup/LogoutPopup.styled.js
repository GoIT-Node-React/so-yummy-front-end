import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import { useMediaQuery } from 'react-responsive';
import { RectButton } from '../common/RectButton.styled';
import { ReactComponent as CloseBtnSvg } from '../../images/close-popup-btn.svg';

export const Wrapper = styled.div`
  position: relative;
  width: 330px;
  padding: 44px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.white[100]};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 480px;
    padding: 50px 40px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    width: 500px;
    padding: 60px 50px;
  }
`;

export const CloseBtn = ({ onClose }) => {
  const mobileMaxWidth = theme.breakpoints[1].slice(0, -2) - 1;

  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth}px)`,
  });

  return (
    <CloseButton onClick={onClose}>
      {isMobile ? (
        <CloseBtnSvg width={20} height={20} />
      ) : (
        <CloseBtnSvg width={24} height={24} />
      )}
    </CloseButton>
  );
};
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

  top: 18px;
  right: 18px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    top: 24px;
    right: 24px;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.29;
  margin-bottom: 24px;

  text-align: center;

  color: ${props => props.theme.colors.black[200]};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[4]};
    margin-bottom: 32px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    column-gap: 16px;
  }
`;

export const LogoutButton = ({ onClick }) => {
  const mobileMaxWidth = theme.breakpoints[1].slice(0, -2) - 1;

  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth}px)`,
  });

  return (
    <>
      {isMobile ? (
        <RectButton
          variant="greenToBlack"
          w="137px"
          h="59px"
          fs="14px"
          onClick={onClick}
        >
          Log out
        </RectButton>
      ) : (
        <RectButton
          variant="greenToBlack"
          w="192px"
          h="59px"
          fs="16px"
          onClick={onClick}
        >
          Log out
        </RectButton>
      )}
    </>
  );
};
export const CancelButton = ({ onClose }) => {
  const mobileMaxWidth = theme.breakpoints[1].slice(0, -2) - 1;

  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth}px)`,
  });

  return (
    <>
      {isMobile ? (
        <RectButton
          variant="gray"
          w="137px"
          h="59px"
          fs="14px"
          onClick={onClose}
        >
          Cancel
        </RectButton>
      ) : (
        <RectButton
          variant="gray"
          w="192px"
          h="59px"
          fs="16px"
          onClick={onClose}
        >
          Cancel
        </RectButton>
      )}
    </>
  );
};
