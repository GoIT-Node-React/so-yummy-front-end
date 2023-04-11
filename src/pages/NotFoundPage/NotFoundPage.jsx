import { Container } from 'components/common/Container.styled';
import NotFound from '../../images/SVG/bro404/not-found.svg';
import { Section } from './NotFoundPage.styled';
import { BoldText, Image, Text, TextContainer } from './NotFoundPage.styled';
import { useScrollToTop } from 'hooks/useScrollToTop';

export default function NotFoundPage() {
  useScrollToTop();
  return (
    <Section>
      <Container>
        <Image src={NotFound} alt="Not found" />
        <TextContainer>
          <BoldText>We are sorry,</BoldText>
          <Text>but the page you were looking for can't be found..</Text>
        </TextContainer>
      </Container>
    </Section>
  );
}
