import styled from '@emotion/styled';

export const ReipeCardStyle = styled.section`
  --see-button-color: ${({ owner, theme }) =>
    owner ? theme.colors.green[200] : theme.colors.black[400]};
  --see-button-color-hover: ${({ owner, theme }) =>
    !owner ? theme.colors.green[200] : theme.colors.black[400]};

  --remove-button-background-color: ${({ owner, theme }) =>
    owner ? theme.colors.green[200] : theme.colors.green[100]};
  --remove-button-background-color-hover: ${({ owner, theme }) =>
    owner ? theme.colors.black[400] : theme.colors.green[200]};
  --remove-button-icon-color: ${({ owner, theme }) =>
    owner ? theme.colors.white[100] : theme.colors.black[400]};
  --remove-button-icon-color-hover: ${({ theme }) => theme.colors.white[100]};

  --opacity: ${({ isDeleting }) => (isDeleting ? 0.1 : 1)};

  position: relative;

  padding: 14px 9px;
  overflow: hidden;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white[100]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 28px 24px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 54px;
  }
`;

export const RecipeCardWrapper = styled.div`
  display: flex;
  gap: 14px;

  opacity: var(--opacity);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 24px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 54px;
  }
`;

export const RecipeCardThumb = styled.div`
  flex-shrink: 0;
  overflow: hidden;

  width: 124px;
  height: 124px;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 228px;
    height: 232px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 318px;
    height: 324px;
  }
`;

export const RecipeCardImage = styled.img`
  width: inherit;
  height: inherit;

  object-fit: cover;
`;

export const RecipeCardContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (max-width: calc(${props =>
      props.theme.breakpoints.tablet} - 1px)) {
    padding-top: 6px;
  }
`;

export const RecipeCardTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;

  margin-bottom: 14px;

  padding-right: 34px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: -0.24px;

  color: ${({ theme }) => theme.colors.gray[500]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 28px;
    padding-right: 48px;
    font-size: 24px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 40px;
    padding-right: 0;
  }
`;

export const RecipeCardDescription = styled.p`
  display: -webkit-box !important;

  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;

  font-size: 8px;
  line-height: calc(10 / 8);
  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.colors.black[200]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    -webkit-line-clamp: 6;

    font-size: 14px;
    line-height: calc(18 / 14);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const RecipeCardTime = styled.p`
  margin-top: auto;

  font-weight: 500;
  font-size: 10px;
  line-height: calc(14 / 10);
  letter-spacing: -0.24px;

  color: ${({ theme }) => theme.colors.gray[500]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
    line-height: calc(20 / 14);
  }
`;

export const RecipeCardRemoveButton = styled.button`
  --button-size: 24px;
  --button-padding: 5px;
  --button-icon-size: 14px;

  position: absolute;
  top: 0;
  right: 0%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--button-size);
  height: var(--button-size);
  padding: var(--button-padding);

  color: var(--remove-button-icon-color);

  background-color: var(--remove-button-background-color);
  border-radius: 4px;

  transition: ${({ theme }) =>
    theme.transitions.create(['background-color', 'color'])};

  & svg {
    width: var(--button-icon-size);
    height: var(--button-icon-size);
  }
  &:hover {
    background-color: var(--remove-button-background-color-hover);
    color: var(--remove-button-icon-color-hover);
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --button-size: 38px;
    --button-padding: 8px;
    --button-icon-size: 22px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --button-size: 44px;
    --button-padding: 10px;
    --button-icon-size: 24px;
  }
`;

export const RecipeCardSeeRecipeButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;

  padding: 6px 14px;

  font-size: 10px;
  line-height: calc(15 / 10);
  color: ${({ theme }) => theme.colors.white[200]};

  background-color: var(--see-button-color);
  border-radius: 24px 44px;

  transition: ${({ theme }) => theme.transitions.create(['background-color'])};

  &:hover {
    background-color: var(--see-button-color-hover);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 12px 32px;

    font-size: 14px;
    line-height: calc(21 / 14);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 18px 44px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const RecipeCardRemovLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;

  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.green[200]};

  background-color: rgba(0, 0, 0, 0.05);
`;

export const RecipeCardRemoveLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  transform: scale(0.6);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    transform: scale(1);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    transform: scale(1.4);
  }
`;
