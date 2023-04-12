import styled from '@emotion/styled';

export const CardContainer = styled.div`
  position: relative;
  width: 343px;
  height: 323px;

  border-radius: ${({ theme }) => theme.radii.lg};

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
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

  transition: ${({ theme }) => theme.transitions.create(['box-shadow'])}; ;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: ${({ theme }) => theme.radii.lg};

  background-color: rgba(235, 243, 212, 0.2);
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 26px;
  left: 18px;
  width: 307px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.white[100]};

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
  margin: auto 0;

  color: ${({ theme }) => theme.colors.gray[500]};

  line-height: 1.25;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
