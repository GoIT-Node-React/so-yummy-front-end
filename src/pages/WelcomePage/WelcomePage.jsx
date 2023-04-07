import { ReactComponent as Logo } from '../../images/SVG/Logo/logo.svg';
import { Button } from "../../components/Button/Button";
import { SocialLinks } from '../../components/common/SocialLinks/SocialLinks'
import {
  Main,
  Title,
  Subtitle,
  SvgWrapper,
  ButtonsWrapper,
} from "./WelcomePage.styled";
export default function WelcomePage() {
  return (
    <Main>
      <SvgWrapper>
        <Logo/>
      </SvgWrapper>
      <Title>Welcome to the app!</Title>
      <Subtitle>
       This app offers more than just a collection of recipes - it is
        designed to be your very own digital cookbook. You can easily
        save and retrieve your own recipes at any time.
      </Subtitle>
      <ButtonsWrapper>
        <Button
            look="rounded_dark"
            fontSize="14px"
            fontSizeTablet="16px"
            size="40px 24px"
            sizeTablet="50px 42px"
          >
            Registration
          </Button>
          <Button
            look="rounded"
            fontSize="14px"
            fontSizeTablet="16px"
            size="40px 24px"
            sizeTablet="50px 42px"
          >
            Sign In
        </Button>
        <SocialLinks />
        </ButtonsWrapper>
    </Main>
  )
}


