import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { Container } from 'components/common/Container.styled';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import { FlexContainer, MainTitle, Section } from './AddRecipePage.styled';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { useMediaQuery } from 'react-responsive';
import { Subtitle } from 'components/AddRecipeForm/AddRecipeForm.styled';
export default function AddRecipePage() {
  const isDesctop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <Section>
      <Container>
        <MainTitle>Add recipe</MainTitle>
        <FlexContainer>
          <AddRecipeForm />
          <div>
            {isDesctop && (
              <div>
                <Subtitle>Follow us</Subtitle>
                <SocialMedia variant="greenToBlack" mt="40px" />
              </div>
            )}
            <PopularRecipes />
          </div>
        </FlexContainer>
      </Container>
    </Section>
  );
}
