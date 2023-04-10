import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 50px;

  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 1;
  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.colors.gray[400]};

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    font-size: ${({ theme }) => theme.fontSizes[10]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
  }
`;
