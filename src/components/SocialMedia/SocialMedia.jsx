import {
  Facebook,
  Instagram,
  SocMediaContainer,
  Twitter,
  YouTube,
} from './SocialMedia.styled';

export default function SocialMedia({ variant, mt }) {
  return (
    <SocMediaContainer mt={mt}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook variant={variant} />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTube variant={variant} />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter variant={variant} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram variant={variant} />
      </a>
    </SocMediaContainer>
  );
}
