import { CardContainer, TitleContainer, Title, Image } from './Card.styled';
export default function Card({ src, title }) {
  return (
    <CardContainer>
      <Image src={src} alt={title} />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </CardContainer>
  );
}
