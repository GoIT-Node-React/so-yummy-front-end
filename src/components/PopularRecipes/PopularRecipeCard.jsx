import { useNavigate } from 'react-router-dom';

import {
  CardContainer,
  Content,
  Image,
  Text,
  Title,
} from './PopularRecipeCard.styled';

export default function PopularRecipeCard({ src, title, text, to }) {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(to)}>
      <Image src={src} alt={title}></Image>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </CardContainer>
  );
}
