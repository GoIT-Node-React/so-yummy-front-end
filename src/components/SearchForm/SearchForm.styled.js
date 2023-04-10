import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  background-color: #f0f0f0;
  clip-path: inset(0px 0px 0px 0px round 20px 50px 20px 50px);

  @media (min-width: 375px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 0.2px)) {
    width: 296px;
    height: 54px;

    margin-bottom: 24px;
  }

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    width: 363px;
    height: 57px;

    margin-bottom: 28px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 511px;
    height: 71px;

    margin-bottom: 28px;
  }
`;

export const Form = styled.form`
  position: relative;

  display: flex;
  align-items: center;
  overflow: hidden;

  padding: 16px 32px;

  background-color: ${({ theme }) => theme.colors.white[200]};
  clip-path: inset(2px 1px 1px 2px round 20px 50px 20px 50px);

  @media (min-width: 375px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 0.2px)) {
    width: 295px;
    height: 53px;

    margin-bottom: 24px;
  }

  @media (min-width: (${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    width: 363px;
    height: 57px;

    margin-bottom: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 510px;
    height: 71px;

    margin-bottom: 28px;
  }
`;

export const SearchFormField = styled.input`
  display: inline-block;
  background: transparent;

  padding-left: 4px;
  padding-right: 4px;

  width: 117px;
  height: 21px;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  border: none;
  outline: none;
  cursor: pointer;

  &:focus {
    background: transparent;
    background-color: transparent;
  }

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.Poppins};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.gray[500]};
    line-height: 1.5;
    background: transparent;
    background-color: transparent;

    @media (min-width: 768px) and (max-width: 1439.98px) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  }

  &[value] {
    font-family: ${({ theme }) => theme.fonts.Poppins};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.gray[500]};
    line-height: 1.5;
    background-color: transparent;

    @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
        theme.breakpoints.desktop} - 0.2px)) {
      width: 135px;
      height: 24px;

      font-size: ${({ theme }) => theme.fontSizes[2]};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 240px;
      height: 28px;

      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const SearchFormButton = styled.button`
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px 42px;
  margin: ${props => props.m};

  width: 113px;
  height: 53px;

  font-size: ${props => props.fs};
  line-height: 1.5;

  clip-path: inset(26px 0px 24px 0px round 15px 35px 15px 35px);

  background-color: #8baa36;
  color: ${({ theme }) => theme.colors.white[200]};

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'])};

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[400]};
    color: ${({ theme }) => theme.colors.white[200]};
  }

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    width: 161px;
    height: 57px;

    clip-path: inset(24px 0px 23px 0px round 15px 35px 15px 35px);
    padding: 50px 42px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 161px;
    height: 70px;

    clip-path: inset(24px 0px 23px 0px round 15px 45px 15px 45px);
    padding: 57px 42px;
  }
`;
