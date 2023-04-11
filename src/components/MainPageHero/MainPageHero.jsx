import { routes } from 'constants/routes.js';
import {
  SectionHero,
  Container,
  Title,
  DecorTitleText,
  Text,
  TipBox,
  TipBoxText,
  DecorTipBoxText,
  TipBoxLink,
  TipBoxLinkText,
  DecorArrowIcon,
} from './MainPageHero.styled.js';
import MainPageSearchForm from './MainPageSearchForm';

export default function MainPageHero() {
  return (
    <SectionHero>
      <Container>
        <Title>
          <DecorTitleText>So</DecorTitleText>Yummy
        </Title>
        <Text>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </Text>
        <TipBox>
          <TipBoxText>
            <DecorTipBoxText>Delicious and healthy</DecorTipBoxText> way to
            enjoy a variety of fresh ingredients in one satisfying meal
          </TipBoxText>
          <TipBoxLink to={`${routes.CATEGORIES_PAGE}/breakfast`}>
            <TipBoxLinkText>See recipes</TipBoxLinkText>
            <DecorArrowIcon />
          </TipBoxLink>
        </TipBox>
        <MainPageSearchForm />
      </Container>
    </SectionHero>
  );
}
