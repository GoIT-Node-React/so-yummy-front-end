import { 
    Wrapper,
    Facebook,
    Youtube,
    Twitter,
    Instagram,
    Link
} from './SocialLinks.styled';

export const SocialLinks = () => {
  return (
    <Wrapper>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </Link>
      <Link
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube />
      </Link>
      <Link
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter width="20" height="16" />
      </Link>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram/>
      </Link>
    </Wrapper>
  );
};
