import Header from '../Header';
import { Footer } from '../../components/Footer/Footer';
import MainSection from 'components/common/Main/Main';
import { SharedLayoutContainer } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <SharedLayoutContainer>
      <Header />
      <MainSection />
      <Footer />
    </SharedLayoutContainer>
  );
}
