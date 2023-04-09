import { useMediaQuery } from 'react-responsive';
import { ReactComponent as BurgerButtonSvg } from '../../../images/burgerButton.svg';
import { theme } from '../../../theme/theme';
import { Button } from './BurgerButton.styled.js';

export default function BurgerButton({ onClick }) {
    const tabletMinWidth = theme.breakpoints[1].slice(0, -2);
    const mobileMaxWidth = tabletMinWidth - 1;

    const isMobile = useMediaQuery({
        query: `(max-width: ${mobileMaxWidth}px)`,
    });
    const isTablet = useMediaQuery({
        query: `(min-width: ${tabletMinWidth}px)`,
    });

    return (
        <Button type="button" onClick={onClick}>
            {isMobile && <BurgerButtonSvg width={28} height={28} />}
            {isTablet && <BurgerButtonSvg />}
        </Button>
    );
}
