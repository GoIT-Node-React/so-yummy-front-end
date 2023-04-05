import {
  Facebook,
  Instagram,
  SocMediaContainer,
  Twitter,
  YouTube,
} from './SocialMedia.styled';

export default function SocialMedia({ variant }) {
  return (
    <SocMediaContainer>
      <Facebook variant={variant} />
      <YouTube variant={variant} />
      <Twitter variant={variant} />
      <Instagram variant={variant} />
    </SocMediaContainer>
  );
}
