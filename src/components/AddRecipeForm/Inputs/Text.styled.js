import styled from '@emotion/styled';

export const TextInput = styled.input`
  display: block;
  width: 343px;
  height: 39px;
  padding-bottom: 18px;
  margin-bottom: 24px;

  background-color: ${({ theme }) => theme.colors.white[200]};

  border: none;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.gray[600]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};

  &::placeholder {
    position: absolute;
    bottom: 18px;

    color: rgba(0, 0, 0, 0.5);

    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.5;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 393px;
    height: 42px;
    margin-bottom: 32px;

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes[3]};
      letter-spacing: -2%;
    }
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    margin-bottom: 40px;
  }
`;
