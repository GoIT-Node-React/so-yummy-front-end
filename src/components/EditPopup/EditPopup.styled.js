import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import { useMediaQuery } from 'react-responsive';
import { RectButton } from '../common/RectButton.styled';
import { ReactComponent as UserInputSvg } from '../../images/user-for-input.svg';
import { ReactComponent as PenInputSvg } from '../../images/edit-for-input.svg';
import { ReactComponent as CloseBtnSvg } from '../../images/close-popup-btn.svg';

export function CloseBtn({ onClose }) {
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
}

export const AddAvatarIcon = styled.div`
  display: block;
  position: absolute;
  cursor: pointer;

  bottom: -3.4px;
  right: 13px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    right: 10px;
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

  top: 18px;
  right: 18px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    top: 24px;
    right: 24px;
  }
`;

export const UserInputIco = () => {
  const mobileMaxWidth = theme.breakpoints[1].slice(0, -2) - 1;

  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth}px)`,
  });

  return (
    <>
      {isMobile ? (
        <UserInputSvg width={18} height={18} />
      ) : (
        <UserInputSvg width={24} height={24} />
      )}
    </>
  );
};

export const PenInputIco = () => {
  const mobileMaxWidth = theme.breakpoints[1].slice(0, -2) - 1;

  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth}px)`,
  });

  return (
    <>
      {isMobile ? (
        <PenInputSvg width={17} height={17} />
      ) : (
        <PenInputSvg width={19} height={19} />
      )}
    </>
  );
};

export const Wrapper = styled.form`
  position: relative;
  width: 330px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: 24px; */

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

export const ChangeAvatarButton = styled.label`
  margin-bottom: 54px;
  position: relative;
  width: 88px;
  height: 88px;
  display: flex;
  align-items: center;

  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 103px;
    height: 103px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-bottom: 52px;
  }
`;
export const FileInput = styled.input`
  margin-bottom: 54px;

  width: 88px;
  height: 88px;
  display: flex;
  align-items: center;

  visibility: hidden;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 103px;
    height: 103px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-bottom: 52px;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  display: block;
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 103px;
    height: 103px;
  }
`;

export const NameInputWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  color: ${props => props.theme.colors.black[200]};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-bottom: 32px;
  }
`;

export const PersonIcoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 16.91px;
  left: 13.5px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    top: 17.5px;
    left: 19px;
  }
`;

export const PenIcoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 18px;
  right: 14px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    top: 20px;
    right: 18px;
  }
`;

export const NameInput = styled.input`
  width: 282px;
  height: 48px;
  border: 1px solid #bababc;
  border-radius: 8px;
  margin: 0;
  outline: none;
  background-color: ${props => props.theme.colors.white[100]};

  padding-left: 39.5px;
  padding-right: 40px;
  padding-top: 15.29px;
  padding-bottom: 11.71px;

  font-family: inherit;
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 1.5;

  color: ${props => props.theme.colors.black[200]};
  /* opacity: 0.8; */

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 400px;
    height: 59px;

    font-size: ${props => props.theme.fontSizes[4]};
    padding-left: 51px;
    padding-right: 42px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const SaveChangesButton = () => {
  const mobileMaxWidth = theme.breakpoints[1].slice(0, -2) - 1;

  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth}px)`,
  });

  return (
    <>
      {isMobile ? (
        <RectButton variant="green" w="282px" h="49px">
          Save changes
        </RectButton>
      ) : (
        <RectButton variant="green" w="400px" h="59px">
          Save changes
        </RectButton>
      )}
    </>
  );
};

export const ErrorMessage = styled.p`
  margin-top: 4px;
  color: ${props => props.theme.colors.red[100]};

  font-size: ${({ theme }) => theme.fontSizes[1]};
`;
