import styled from '@emotion/styled';

const getInputColor =
  defaultColor =>
  ({ theme, isError, isTouched, isDirty, isSubmitted }) => {
    if (isSubmitted) {
      if (isError) return theme.colors.red[100];

      if (isTouched && isDirty) return theme.colors.green[300];
    }

    return defaultColor;
  };
const getInputBorderColor = ({ theme, isError, isDirty, isSubmitted }) => {
  if (isSubmitted) {
    if (isError) return theme.colors.red[100];

    if (isDirty) return theme.colors.green[300];
  }

  return theme.colors.white[100];
};
const getIconCursor = ({ isError, isPassword, isSubmitted }) =>
  isError || (!isSubmitted && isPassword) ? 'pointer' : 'auto';

export const StyledFormGroup = styled.div`
  --input-border-color: ${getInputColor('rgba(250, 250, 250, 0.3)')};
  --input-border-color-hover: ${getInputBorderColor};
  --input-icon-color: ${getInputColor('rgba(250, 250, 250, 0.8)')};
  --input-icon-color-hover: ${getInputBorderColor};
  --right-icon-cursor: ${getIconCursor};

  position: relative;

  width: 100%;
`;

export const StyledLabel = styled.label`
  position: relative;

  width: 100%;

  font-family: 'Poppins';
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: calc(21 / 14);
  letter-spacing: -0.02em;
  color: rgba(250, 250, 250, 0.8);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: calc(27 / 18);
  }
`;

export const StyledInput = styled.input`
  width: 100%;

  padding: 16px;
  padding-left: 50px;

  outline: none;
  border: 1px solid var(--input-border-color);
  border-radius: 6px;
  color: inherit;

  background: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'border-color'])};

  &::placeholder {
    color: inherit;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white[100]};
    border-color: var(--input-border-color-hover);

    // Icons color on input hover
    & + span,
    & + span + span {
      color: var(--input-icon-color-hover);
    }
  }
`;
// Base Input icon component
const StyledInputIcon = styled.span`
  position: absolute;
  top: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  color: var(--input-icon-color);

  transition: ${({ theme }) => theme.transitions.create(['color'])};

  transform: translateY(-50%);
`;

export const InputLeftIcon = styled(StyledInputIcon)`
  left: 18px;
`;

export const InputRightIcon = styled(StyledInputIcon)`
  cursor: var(--right-icon-cursor);

  right: 13px;
`;

export const StyledInputError = styled.p`
  margin-top: 8px;

  font-size: 14px;
  line-height: calc(21 / 14);
  text-align: left;

  color: ${({ theme }) => theme.colors.red[100]};
`;
