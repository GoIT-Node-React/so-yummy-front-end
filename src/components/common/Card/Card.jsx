import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { CardContainer, TitleContainer, Title, Image } from './Card.styled';

export default function Card({ src, title, to }) {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(to)}>
      <Image src={src} alt={title} />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </CardContainer>
  );
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
