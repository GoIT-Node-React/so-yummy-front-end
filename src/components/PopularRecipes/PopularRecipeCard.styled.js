import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  width: 342px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
  padding-bottom: 13px;
  margin-bottom: 24px;
  cursor: pointer;
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 335px;
    margin-bottom: 0;
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 318px;
    margin-bottom: 24px;
  }
`;

export const Image = styled.img`
  width: 104px;
  height: 85px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-right: 12px;
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 97px;
  }
`;
export const Content = styled.div`
  height: 85px;
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 208px;
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 198px;
  }
`;
export const Title = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.gray[800]};
  line-height: 1.33;
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;
