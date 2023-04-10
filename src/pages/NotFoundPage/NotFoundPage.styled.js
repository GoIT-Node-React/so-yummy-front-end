import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 100px 0;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    padding: 100px 0 204px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    padding: 138px 0 203px;
  }
`;

export const Image = styled.img`
  display: block;

  width: 259px;
  height: 170px;
  margin: 0 auto 14px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 498px;
    height: 327px;
    margin: 0 auto 32px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    height: 331px;
  }
`;

export const BoldText = styled.p`
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.black[100]};

  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-align: center;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin-bottom: 14px;

    font-size: ${({ theme }) => theme.fontSizes[5]};
    line-height: 1;
  }
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.5);

  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-align: center;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    text-align: start;
  }
`;

export const TextContainer = styled.div`
  width: 206px;
  margin: 0 auto;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 428px;
  }
`;
