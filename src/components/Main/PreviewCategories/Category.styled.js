import styled from '@emotion/styled';

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--title-color);
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 50px;
  }
`;
export const ListRecipe = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;

export const Container = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
  }
`;