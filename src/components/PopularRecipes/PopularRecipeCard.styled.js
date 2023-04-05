import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  width: 342px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  padding: 13px 0;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const ImageContainer = styled.div`
  width: 104px;
  height: 85px;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-right: 12px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Content = styled.div``;
export const Title = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 1.33;
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;
