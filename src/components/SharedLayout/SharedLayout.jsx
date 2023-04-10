import Header from '../Header';
import { Footer } from '../../components/Footer/Footer';
import MainSection from 'components/common/Main/Main';

export default function SharedLayout() {
    return (
        <>
            <Header />
            <MainSection />
            <Footer />
        </>
    );
}
