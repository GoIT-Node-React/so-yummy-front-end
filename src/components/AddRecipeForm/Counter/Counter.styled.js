import styled from '@emotion/styled';

import { HiMinus, HiPlus } from 'react-icons/hi';

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92px;
  height: 28px;
  padding: 4px 16px;

  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 110px;
    height: 32px;
    padding: 6px 17px;
  }
`;

export const CounterButton = styled.button`
  display: flex;
  padding: 0;

  background-color: transparent;
`;
export const Plus = styled(HiPlus)`
  width: 14px;
  height: 14px;

  color: ${({ theme }) => theme.colors.green[200]};

  cursor: pointer;
`;

export const Minus = styled(HiMinus)`
  width: 14px;
  height: 14px;

  color: rgba(51, 51, 51, 0.3);

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.green[200]};
  }
`;

export const CounterData = styled.p`
  margin: auto;

  color: ${({ theme }) => theme.colors.gray[300]};

  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.3;
`;
