import styled from '@emotion/styled';
import bgMobile from 'images/recipe-info/recipe-info-mobile.jpg';
import bgMobile2x from 'images/recipe-info/recipe-info-mobile@2x.jpg';
import bgTablet from 'images/recipe-info/recipe-info-tablet.jpg';
import bgTablet2x from 'images/recipe-info/recipe-info-tablet@2x.jpg';
import bgDesktop from 'images/recipe-info/recipe-info-desktop.jpg';
import bgDesktop2x from 'images/recipe-info/recipe-info-desktop@2x.jpg';

export const RecipeHeroContainer = styled.div`
  --bg-original: url(${bgMobile});
  --bg-2x: url(${bgMobile2x});

  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: var(--hero-height);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 144px 36px 90px;

  text-align: center;

  background-image: var(--bg-original);
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: var(--bg-2x);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --bg-original: url(${bgTablet});
    --bg-2x: url(${bgTablet2x});

    padding: 136px 131px 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --bg-original: url(${bgDesktop});
    --bg-2x: url(${bgDesktop2x});

    padding: 164px 392px 32px;
  }
`;

export const RecipeTitle = styled.h1`
  margin-bottom: 18px;

  display: -webkit-box;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${({ theme }) => theme.colors.green[200]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;

    font-size: 44px;
  }
`;

export const RecipeDescription = styled.p`
  margin-bottom: 24px;

  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.colors.black[400]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 30px;
  }
`;

export const RecipeAddToFavoriteButton = styled.button`
  cursor: pointer;

  width: fit-content;
  padding: 10px 18px;

  font-size: 10px;
  line-height: calc(15 / 10);
  color: ${({ theme }) => theme.colors.black[400]};

  background-color: transparent;
  border-radius: 24px 44px;
  box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.green[200]};

  transition: ${({ theme }) =>
    theme.transitions.create(['background-color', 'box-shadow', 'color'])};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white[200]};

    background-color: ${({ theme }) => theme.colors.green[200]};
    box-shadow: none;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 18px 44px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const RecipeTime = styled.span`
  --icon-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;

  margin-top: auto;

  font-weight: 500;
  font-size: 10px;
  line-height: calc(14 / 10);
  letter-spacing: -0.24px;

  color: ${({ theme }) => theme.colors.black[200]};

  & > svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --icon-size: 20px;

    column-gap: 8px;

    font-size: 14px;
    line-height: calc(20 / 14);
  }
`;

export const RecipeHeroLoader = styled.span`
  display: block;

  transform: scale(0.5);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 15px;

    transform: scale(1);
  }
`;
