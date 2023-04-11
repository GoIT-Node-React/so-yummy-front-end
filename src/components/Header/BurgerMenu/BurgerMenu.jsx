import Logo from '../Logo';
import Navigation from '../Navigation';
import ThemeToggler from '../ThemeToggler';

import {
  Wrapper,
  CloseBtn,
  LogoWrapper,
  ThemeTogglerWrapper,
} from './BurgerMenu.styled.js';

export default function BurgerMenu({ onClose }) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo mr="0px" />
      </LogoWrapper>
      <CloseBtn onClose={onClose} />
      <Navigation mr="0px" fd="column" onClick={onClose} />
      <ThemeTogglerWrapper>
        <ThemeToggler />
      </ThemeTogglerWrapper>
    </Wrapper>
  );
}
