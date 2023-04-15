import styled from '@emotion/styled';

export const RelativeContainer = styled.div`
  position: relative;
`;

export const StyledTextarea = styled.textarea`
  width: 343px;
  height: 154px;
  padding: 10px 16px;
  margin-top: 24px;
  margin-bottom: 18px;

  background-color: ${({ theme }) => theme.colors.white[400]};

  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.5;
  letter-spacing: -0.02em;

  border: none;
  border-radius: ${({ theme }) => theme.radii.md};

  caret-color: ${({ theme }) => theme.colors.gray[600]};

  resize: none;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 4px;
    height: 90px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-radius: 12px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);

    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.5;
    letter-spacing: -0.02em;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 505px;
    height: 224px;
    margin-top: 32px;
    margin-bottom: 2px;
    padding: 16px 22px;

    font-size: ${({ theme }) => theme.fontSizes[4]};

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin-bottom: 32px;
  }
`;

export const TextAreaMessage = styled.span`
  position: absolute;
  bottom: 12px;
  display: block;

  color: ${({ theme }) => theme.colors.red[100]};

  font-size: ${({ theme }) => theme.fontSizes[1]};
`;
