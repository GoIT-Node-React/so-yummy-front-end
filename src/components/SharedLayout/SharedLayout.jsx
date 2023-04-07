import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Logo from '../common/Header/Logo';
// import Navigation from '../common/Header/Navigation';
// import UserLogo from '../common/Header/UserLogo';
// import ThemeToggler from '../common/Header/ThemeToggler';
import Header from '../common/Header';
// import BurgerButton from '../common/Header/BurgerButton';

export default function SharedLayout() {
    return (
        <>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    );
}
