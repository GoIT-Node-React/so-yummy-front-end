import styled from '@emotion/styled';

export const CustomInput = styled.div`
  position: relative;
  width: 104px;
  height: 53px;
  padding: 16px;

  background-color: #f5f5f5;

  border-radius: 6px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 117px;
    height: 59px;
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 40px;
  margin: 0;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.black[200]};

  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.5;
  letter-spacing: -0.02em;

  border: none;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.black[200]};

    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.5;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 50px;

    font-size: ${({ theme }) => theme.fontSizes[4]};

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }
  }
`;
