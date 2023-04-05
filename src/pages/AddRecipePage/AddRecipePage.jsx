import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { Container } from 'components/common/Container.styled';
// import SocialMedia from 'components/SocialMedia/SocialMedia';
export default function AddRecipePage() {
  return (
    <Container>
      <AddRecipeForm />
      {/* <SocialMedia variant="greenToBlack" /> */}
    </Container>
  );
}
