import { useMediaQuery } from 'react-responsive';
import { theme } from '../../theme/theme';
import { Container, StyledHeader } from './Header.styled.js';
import Logo from './Logo';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import ThemeToggler from './ThemeToggler';
import Wrapper from './Wrapper';
import BurgerButton from './BurgerButton';
import BurgerMenu from './BurgerMenu';
import EditPopup from '../EditPopup';
import LogoutPopup from '../LogoutPopup';
import Modal from '../Modal';

import { useState } from 'react';

export default function Header() {
  const [isBurgerMenuShow, setIsBurgerMenuShow] = useState(false);
  const [isEditPopupShow, setIsEditPopupShow] = useState(false);
  const [isLogoutPopupShow, setIsLogoutPopupShow] = useState(false);

  const tabletMaxWidth = theme.breakpoints[2].slice(0, -2) - 1;

  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${tabletMaxWidth}px)`,
  });

  const handleMenuOnClose = () => {
    setIsBurgerMenuShow(false);
  };
  const handleBurgerButton = () => {
    setIsBurgerMenuShow(true);
  };

  const HandleEditPopupShow = () => {
    setIsEditPopupShow(!isEditPopupShow);
  };

  const HandleLogoutPopupShow = async () => {
    setIsLogoutPopupShow(!isLogoutPopupShow);
  };

  return (
    <StyledHeader>
      {isMobileOrTablet ? (
        <Container>
          {!isBurgerMenuShow && (
            <>
              <Logo />
              <Wrapper>
                <UserLogo
                  HandleEditPopupShow={HandleEditPopupShow}
                  HandleLogoutPopupShow={HandleLogoutPopupShow}
                />
                <BurgerButton onClick={handleBurgerButton} />
              </Wrapper>
            </>
          )}
          {isBurgerMenuShow && (
            <Modal onClose={handleMenuOnClose} isMenu={true}>
              <BurgerMenu onClose={handleMenuOnClose} />
            </Modal>
          )}
          {isEditPopupShow && (
            <Modal onClose={HandleEditPopupShow}>
              <EditPopup onClose={HandleEditPopupShow} />
            </Modal>
          )}
          {isLogoutPopupShow && (
            <Modal onClose={HandleLogoutPopupShow}>
              <LogoutPopup onClose={HandleLogoutPopupShow} />
            </Modal>
          )}
        </Container>
      ) : (
        <Container>
          <Logo mr="187px" />
          <Navigation onClick={handleMenuOnClose} />
          <UserLogo
            HandleEditPopupShow={HandleEditPopupShow}
            HandleLogoutPopupShow={HandleLogoutPopupShow}
          />
          <ThemeToggler />
          {isEditPopupShow && (
            <Modal onClose={HandleEditPopupShow}>
              <EditPopup onClose={HandleEditPopupShow} />
            </Modal>
          )}
          {isLogoutPopupShow && (
            <Modal onClose={HandleLogoutPopupShow}>
              <LogoutPopup onClose={HandleLogoutPopupShow} />
            </Modal>
          )}
        </Container>
      )}
    </StyledHeader>
  );
}
