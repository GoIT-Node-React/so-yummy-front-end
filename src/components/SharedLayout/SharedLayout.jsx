import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Footer } from '../../components/Footer/Footer';

export default function SharedLayout() {
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
            <Header />
            <main>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
