import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FigureButton } from '../FigureButton.styled';
import {
  BinWrapper,
  Container,
  Content,
  DeleteBin,
  FlexContainer,
  Image,
  Text,
  Time,
  Title,
  TitleContainer,
} from './RecipeCard.styled';

export default function RecipeCard({
  myRecipes,
  src,
  title,
  text,
  time,
  onDeleteRecipe,
  to,
}) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1439px)' });
  const navigate = useNavigate();

  return (
    <Container myRecipes={myRecipes}>
      <Image src={src} alt={title} />
      <Content>
        {isMobile ? (
          <>
            {myRecipes ? (
              <TitleContainer>
                <Title>{title}</Title>
                <BinWrapper myRecipes={myRecipes} onClick={onDeleteRecipe}>
                  <DeleteBin myRecipes={myRecipes} />
                </BinWrapper>
              </TitleContainer>
            ) : (
              <Title>{title}</Title>
            )}
          </>
        ) : (
          <TitleContainer>
            <Title>{title}</Title>
            <BinWrapper myRecipes={myRecipes} onClick={onDeleteRecipe}>
              <DeleteBin myRecipes={myRecipes} />
            </BinWrapper>
          </TitleContainer>
        )}

        <Text myRecipes={myRecipes}>{text}</Text>
        <FlexContainer>
          <Time>{time} min</Time>
          {isMobile ? (
            <>
              {myRecipes ? (
                <FigureButton
                  variant="green"
                  fs="10px"
                  w="87px"
                  h="27px"
                  p="28px 14px"
                  m="0 0 -14px 0"
                  onClick={() => navigate(to)}
                >
                  See recipe
                </FigureButton>
              ) : (
                <BinWrapper onClick={onDeleteRecipe}>
                  <DeleteBin />
                </BinWrapper>
              )}
            </>
          ) : (
            <>
              {myRecipes ? (
                <>
                  {isTablet ? (
                    <FigureButton
                      variant="green"
                      fs="14px"
                      w="138px"
                      h="45px"
                      p="40px 32px"
                      m="0 0 -18px 0"
                      onClick={() => navigate(to)}
                    >
                      See recipe
                    </FigureButton>
                  ) : (
                    <FigureButton
                      variant="green"
                      fs="16px"
                      w="160px"
                      h="54px"
                      p="50px 38px"
                      m="0 0 -22px 0"
                      onClick={() => navigate(to)}
                    >
                      See recipe
                    </FigureButton>
                  )}
                </>
              ) : (
                <>
                  {isTablet ? (
                    <FigureButton
                      variant="dark"
                      fs="14px"
                      w="138px"
                      h="45px"
                      p="40px 32px"
                      m="0 0 -18px 0"
                      onClick={() => navigate(to)}
                    >
                      See recipe
                    </FigureButton>
                  ) : (
                    <FigureButton
                      variant="dark"
                      fs="16px"
                      w="160px"
                      h="54px"
                      p="50px 38px"
                      m="0 0 -22px 0"
                      onClick={() => navigate(to)}
                    >
                      See recipe
                    </FigureButton>
                  )}
                </>
              )}
            </>
          )}
        </FlexContainer>
      </Content>
    </Container>
  );
}
