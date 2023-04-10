import Header from '../Header';
import { Footer } from '../../components/Footer/Footer';
import MainSection from 'components/common/Main/Main';

export default function SharedLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
