import { useMediaQuery } from 'react-responsive';
import { theme } from '../../../theme/theme';
import { Container } from './Header.styled.js';
import Logo from './Logo';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import ThemeToggler from './ThemeToggler';
import Wrapper from './Wrapper';
import BurgerButton from './BurgerButton';

export default function Header() {
    const tabletMaxWidth = theme.breakpoints[2].slice(0, -2) - 1;

    const isMobileOrTablet = useMediaQuery({
        query: `(max-width: ${tabletMaxWidth}px)`,
    });

    return (
        <div>
            {isMobileOrTablet ? (
                <Container>
                    <Logo />
                    <Wrapper>
                        <UserLogo />
                        <BurgerButton />
                    </Wrapper>
                </Container>
            ) : (
                <Container>
                    <Logo />
                    <Navigation />
                    <UserLogo />
                    <ThemeToggler />
                </Container>
            )}
        </div>
    );
}
