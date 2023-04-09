import styled from '@emotion/styled';

export const RecipePreparationContainer = styled.div`
  margin-top: 50px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 96px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    gap: 50px;

    margin-top: 100px;
  }
`;

export const RecipePreparationWrapper = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 50px;
  }
`;

export const RecipePreparationHeader = styled.h2`
  margin-bottom: 28px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${({ theme }) => theme.colors.gray[500]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 32px;
  }
`;

export const RecipePreparationList = styled.ul`
  counter-reset: section;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const RecipePreparationItem = styled.li`
  display: flex;
  align-items: flex-start;

  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: -0.02em;

  color: rgba(0, 0, 0, 0.8);

  &::before {
    counter-increment: section;
    content: counter(section);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    min-width: 21px;
    min-height: 21px;
    margin-right: 14px;

    font-weight: 600;
    font-size: 12px;
    line-height: calc(18 / 12);
    font-feature-settings: 'ss04' on;

    color: ${({ theme }) => theme.colors.white[100]};

    background-color: ${({ theme }) => theme.colors.green[200]};
    border-radius: 50%;
  }
`;

export const RecipeThumb = styled.img`
  display: block;

  width: 100%;
  height: 250px;

  border-radius: 8px;

  object-fit: cover;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 433px;
    height: 332px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-shrink: 0;
  }
`;
