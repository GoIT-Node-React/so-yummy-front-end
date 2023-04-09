import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import { FiMail } from 'react-icons/fi';

export const FooterForm = styled.div`
  margin: 0 auto;
  height: 84px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 44px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 442px;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 38px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 339px;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 38px;
  }
`;

export const Form = styled.form`
  margin: 0;
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;
  width: 204px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
    margin-bottom: 38px;
    width: 442px;
    justify-content: center;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    flex-direction: column;
    margin: 0;
    height: auto;
    width: 339px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 38px;
  padding-left: 14px;
  align-items: center;
  color: ${({ theme }) => theme.colors.white[200]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.fontSizes[2]};
  letter-spacing: -0.02em;
  border: 1px solid rgba(250, 250, 250, 0.16);
  border-radius: 6px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 1px solid ${theme.colors.white[100]};
    color: ${({ theme }) => theme.colors.white[100]};
  }

  margin-bottom: 8px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 259px;
    height: 50px;
    padding-left: 15px;
    margin-right: 12px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 338px;
    height: 60px;
    padding-left: 16px;
    margin-right: 0px;
    margin-bottom: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0px;
  background-color: transparent;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.white[200]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.fontSizes[2]};
  letter-spacing: -0.02em;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white[300]};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.fontSizes[4]};
  }

  &:focus,
  &:hover {
    outline-style: none;
    outline: none;
    color: ${({ theme }) => theme.colors.white[100]};

    @media screen and (min-width: ${theme.breakpoints[1]}) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
      line-height: 21px;
    }
    @media screen and (min-width: ${theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizes[4]};
      line-height: 27px;
    }
  }
`;
export const IconLetterStyle = styled.div`
  display: flex;

  height: 12px;
  margin-left: 14px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    height: 16px;
    margin-left: 15px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    margin-left: 15.5px;
  }
`;
export const IconLetter = styled(FiMail)`
  height: 12px;
  width: 16px;
  color: ${({ theme }) => theme.colors.white[200]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    height: 16px;
    width: 20px;
  }
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;


export const SubscribeButton = styled.button`
  width: 204px;
  height: 38px;
  margin: 0 auto;
  padding-top: 11px;
  padding-bottom: 11px;
  background-color: ${({ theme }) => theme.colors.green[200]};
  border-radius: 6px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.black[400]};
    cursor: pointer;
  }
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.white[200]};
  border: none;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 171px;
    height: 50px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: ${({ theme }) => theme.fontSizes[4]};
    margin: 0;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    margin: 0;
    width: 100%;
    height: 60px;
    padding-top: 21px;
    padding-bottom: 21px;
  }
`;


export const SubscribeTitle = styled.h3`
  display: none;
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: block;
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: 27px;
    color: ${({ theme }) => theme.colors.white[200]};
    margin: 0px;
    margin-bottom: 14px;
  }
`;

export const SubscribeText = styled.p`
  display: none;
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: block;
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.fontSizes[4]};
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.white[200]};
    margin: 0px;
    margin-bottom: 28px;
  }
`;

