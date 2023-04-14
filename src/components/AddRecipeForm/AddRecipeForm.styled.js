import styled from '@emotion/styled';

import { GrClose } from 'react-icons/gr';

export const StyledLabel = styled.label`
  position: relative;
  display: block;
  width: 279px;
  height: 268px;
  margin: 0 auto 32px auto;

  background-color: ${({ theme }) => theme.colors.green[200]};
  border-radius: ${({ theme }) => theme.radii.lg};

  cursor: pointer;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin: 0 32px 0 0;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 357px;
    height: 344px;
    margin: 0 50px 0 0;
  }
`;

export const TextLabel = styled.label`
  position: relative;
  display: block;
  width: 343px;

  color: rgba(0, 0, 0, 0.5);

  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.5;
  letter-spacing: -0.02em;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 393px;

    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const SelectContainer = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  width: 120px;
`;

export const Border = styled.p`
  width: 343px;
  height: 18px;
  margin-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 393px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    margin-bottom: 40px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 343px;
  margin-bottom: 18px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 704px;
    margin-bottom: 24px;
  }
`;

export const MediaContainer = styled.div`
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    display: flex;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 343px;
  margin-top: 66px;
  margin-bottom: 28px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 704px;
    margin-top: 68px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 609px;
    margin-top: 72px;
  }
`;

export const UtilContainer = styled.div`
  margin-top: 44px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin-top: 100px;
  }
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray[500]};

  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 1;
  letter-spacing: -2%;
`;

export const CloseButton = styled.button`
  width: 20px;
  padding: 0;

  background-color: transparent;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin-left: 127px;
  }
`;

export const Close = styled(GrClose)`
  width: 18px;
  height: 18px;
  margin: auto 0;

  color: ${({ theme }) => theme.colors.gray[300]};

  cursor: pointer;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 20px;
    height: 20px;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -20px;
  display: block;

  color: ${({ theme }) => theme.colors.red[100]};

  font-size: ${({ theme }) => theme.fontSizes[1]};
`;

export const IngredientsError = styled.p`
  margin-top: -14px;
  color: #e74a3b;

  font-size: ${({ theme }) => theme.fontSizes[1]};
`;

export const LoaderContainer = styled.div`
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
`;
