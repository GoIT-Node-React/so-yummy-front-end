import { ReactComponent as Logo } from '../../images/SVG/Logo/logo.svg';

import {
  Main,
  Title,
  Subtitle,
  SvgWrapper,
  ButtonsWrapper,
  LinkStyled
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
        <LinkStyled
          to="/register"
          look="rounded_dark"
          >
            Registration
          </LinkStyled>
        <LinkStyled
          to="/signin"
          look="rounded"
          >
            Sign In
        </LinkStyled>
      </ButtonsWrapper>
    </Main>
  )
}


