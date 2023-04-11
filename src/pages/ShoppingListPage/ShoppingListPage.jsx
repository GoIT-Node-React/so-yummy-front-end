import ShopingListSection from 'components/shoppingList/ShopingListSection';
import { Container } from '../../components/common/Container.styled';
import { ShoppingListTitle, ShoppingListSection } from './styled';
import { useScrollToTop } from 'hooks/useScrollToTop';

const ShoppingListPage = () => {
  useScrollToTop();

  return (
    <ShoppingListSection>
      <Container>
        <ShoppingListTitle>Shopping list</ShoppingListTitle>
        <ShopingListSection />
      </Container>
    </ShoppingListSection>
  );
};

export default ShoppingListPage;
