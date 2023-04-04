import styled from '@emotion/styled';

export const CardContainer = styled.div`
  background-color: blue;
  position: relative;
  width: 343px;
  height: 323px;
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: pointer;
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 336px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 300px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const TitleContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white[100]};
  position: absolute;
  bottom: 26px;
  left: 18px;
  width: 307px;
  height: 52px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.lg};

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 300px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    bottom: 23px;
    left: 16px;
    width: 268px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  line-height: 1.25;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin: auto 0;
`;
