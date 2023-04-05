import { useNavigate } from 'react-router-dom';
import {
  CardContainer,
  Content,
  Image,
  ImageContainer,
  Text,
  Title,
} from './PopularRecipeCard.styled';

export default function PopularRecipeCard({ src, title, text, to }) {
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(to)}>
      <ImageContainer>
        <Image src={src} alt={title}></Image>
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </CardContainer>
  );
}
