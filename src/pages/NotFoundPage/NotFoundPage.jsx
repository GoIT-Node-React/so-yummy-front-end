import { Container } from 'components/common/Container.styled';
import NotFound from '../../images/SVG/bro404/not-found.svg';
import { BoldText, Image, Text, TextContainer } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <section>
      <Container>
        <Image src={NotFound} alt="Not found" />
        <TextContainer>
          <BoldText>We are sorry,</BoldText>
          <Text>but the page you were looking for can't be found..</Text>
        </TextContainer>
      </Container>
    </section>
  );
}
