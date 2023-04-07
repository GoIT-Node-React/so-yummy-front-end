import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  background-color: #f0f0f0;
  clip-path: inset(0px 0px 0px 0px round 20px 50px 20px 50px);

  @media (min-width: 375px) and (max-width: 767.98px) {
    width: 296px;
    height: 54px;

    margin-bottom: 24px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 363px;
    height: 57px;

    margin-bottom: 28px;
  }

  @media (min-width: 1440px) {
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

  background-color: ${({ theme }) => theme.colors.white[100]};
  clip-path: inset(2px 1px 1px 2px round 20px 50px 20px 50px);

  @media (min-width: 375px) and (max-width: 767.98px) {
    width: 295px;
    height: 53px;

    margin-bottom: 24px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 363px;
    height: 57px;

    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    width: 510px;
    height: 71px;

    margin-bottom: 28px;
  }
`;

export const SearchFormField = styled.input`
  display: inline-block;
  background-color: transparent;

  padding-left: 4px;
  padding-right: 4px;
  margin-right: 33px;

  width: 117px;
  height: 21px;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  border: none;
  outline: none;
  cursor: pointer;

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.Poppins};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.gray[500]};
    line-height: 1.5;

    @media (min-width: 768px) and (max-width: 1439.98px) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }

    @media (min-width: 1440px) {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  }

  &[value] {
    font-family: ${({ theme }) => theme.fonts.Poppins};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.gray[500]};
    line-height: 1.5;

    @media (min-width: 768px) and (max-width: 1439.98px) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }

    @media (min-width: 1440px) {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  }

  @media (min-width: 1440px) {
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
    background-color: ${({ theme }) => theme.colors.white[400]};
    color: ${({ theme }) => theme.colors.white[200]};
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 161px;
    height: 57px;

    clip-path: inset(24px 0px 23px 0px round 15px 35px 15px 35px);
    padding: 50px 42px;
  }

  @media (min-width: 1440px) {
    width: 161px;
    height: 70px;

    clip-path: inset(24px 0px 23px 0px round 15px 45px 15px 45px);
    padding: 57px 42px;
  }
`;
