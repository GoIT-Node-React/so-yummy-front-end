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
import { FigureButton } from '../../common/FigureButton.styled';
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
            <EditButton HandleEditPopupShow={HandleEditPopupShow} />
          </InnerWrapper>

          <FigureButton
            onClick={handleLogoutButton}
            w="125px"
            h="43px"
            variant="green"
            p="44px 24px"
            m="-40px 0 0"
          >
            <FigureButtonInnerWrapper>
              <FigureButtonText>Log out</FigureButtonText>
              <ArrowIcon />
            </FigureButtonInnerWrapper>
          </FigureButton>
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

          <FigureButton
            onClick={handleLogoutButton}
            w="141px"
            h="43px"
            variant="green"
            p="46px 32px"
            m="-42px 0 0"
          >
            <FigureButtonInnerWrapper>
              <FigureButtonText>Log out</FigureButtonText>
              <ArrowIcon />
            </FigureButtonInnerWrapper>
          </FigureButton>
        </Wrapper>
      )}
    </>
  );
}
