import { useMediaQuery } from 'react-responsive';
import {
  Wrapper,
  InnerWrapper,
  Text,
  EditButton,
  FigureButtonText,
  FigureButtonInnerWrapper,
  ArrowIcon,
} from './PromptPopup.styled';
import { theme } from '../../../theme/theme';
import { MainButton } from '../../common/FigureButton.styled';
import { useEffect, useRef } from 'react';

export default function PromptPopup({
  onClose,
  HandleEditPopupShow,
  HandleLogoutPopupShow,
}) {
  const wrapperRef = useRef();
  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', escapeListener);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', escapeListener);
      window.removeEventListener('click', handleClickOutside);
    };
  });

  const escapeListener = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const mobileMaxWidth = theme.breakpoints[1].slice(0, -2) - 1;

  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth}px)`,
  });

  const handleLogoutButton = () => {
    onClose();
    HandleLogoutPopupShow();
  };

  return (
    <>
      {isMobile ? (
        <Wrapper ref={wrapperRef}>
          <InnerWrapper>
            <Text>Edit profile</Text>
            <EditButton
              HandleEditPopupShow={HandleEditPopupShow}
              onClose={onClose}
            />
          </InnerWrapper>

          <MainButton
            onClick={handleLogoutButton}
            w="125px"
            variant="green"
            p="12px 24px 12px 27px"
            fs="14px"
          >
            <FigureButtonInnerWrapper>
              <FigureButtonText>Log out</FigureButtonText>
              <ArrowIcon />
            </FigureButtonInnerWrapper>
          </MainButton>
        </Wrapper>
      ) : (
        <Wrapper ref={wrapperRef}>
          <InnerWrapper>
            <Text>Edit profile</Text>
            <EditButton
              HandleEditPopupShow={HandleEditPopupShow}
              onClose={onClose}
            />
          </InnerWrapper>

          <MainButton
            onClick={handleLogoutButton}
            w="141px"
            fs="14px"
            variant="green"
            p="12px 30px 12px 35px"
          >
            <FigureButtonInnerWrapper>
              <FigureButtonText>Log out</FigureButtonText>
              <ArrowIcon />
            </FigureButtonInnerWrapper>
          </MainButton>
        </Wrapper>
      )}
    </>
  );
}
