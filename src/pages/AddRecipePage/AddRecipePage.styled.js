import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 50px 0 76px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    padding: 72px 0 200px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    padding: 100px 0 200px;
  }
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    display: flex;
    justify-content: space-between;
  }
`;
export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.gray[400]};

  line-height: 1;
  letter-spacing: -2%;
  margin-bottom: 72px;
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    font-size: 32px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    font-size: 44px;
  }
`;
