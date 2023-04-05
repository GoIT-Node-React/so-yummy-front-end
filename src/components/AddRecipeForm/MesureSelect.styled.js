import styled from '@emotion/styled';

export const CustomInput = styled.div`
  position: relative;
  width: 104px;
  height: 53px;
  border-radius: 6px;
  background-color: #f5f5f5;
  padding: 16px;
`;
export const Input = styled.input`
  position: absolute;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black[200]};
  width: 40px;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.5;
  letter-spacing: -0.02em;
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
`;
