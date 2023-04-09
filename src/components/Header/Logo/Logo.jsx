import { useMediaQuery } from 'react-responsive';
import { ReactComponent as LogoSvg } from '../../../images/logo.svg';
import { theme } from '../../../theme/theme';
import { LogoLink } from './Logo.styled.js';

export default function Logo(props) {
    const tabletDesktopMinWidth = theme.breakpoints[1].slice(0, -2);
    const mobileMaxWidth = tabletDesktopMinWidth - 1;

    const isMobile = useMediaQuery({
        query: `(max-width: ${mobileMaxWidth}px)`,
    });
    const isTabletOrDesktop = useMediaQuery({
        query: `(min-width: ${tabletDesktopMinWidth}px)`,
    });

    return (
        <LogoLink to="/" mr={props.mr}>
            {isMobile && <LogoSvg width={40} height={40} />}
            {isTabletOrDesktop && <LogoSvg />}
        </LogoLink>
    );
}
