import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  RectButton,
  RectLinkButton,
} from 'components/common/RectButton.styled';

export const AuthForm = styled.form`
  --gap-column-input: 12px;

  margin: 0 auto;
  padding: 32px 28px 40px;

  background-color: ${({ theme }) => theme.colors.black[300]};

  box-shadow: ${({ theme }) => theme.shadows.base};
  border-radius: 30px;

  & > div:not(:last-of-type) {
    margin-bottom: var(--gap-column-input);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --gap-column-input: 24px;

    padding: 44px 50px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-right: 0;
    margin-left: auto;
  }
`;

export const AuthTitle = styled.h2`
  margin-bottom: 18px;

  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: 24px;
  line-height: calc(28 / 24);
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  text-align: left;

  color: ${({ theme }) => theme.colors.white[200]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 50px;

    font-size: 28px;
    line-height: calc(30 / 28);
  }
`;

export const Devider = styled.span`
  display: block;

  margin: var(--gap-column-input) 0;
  width: 100%;
  height: 1px;

  background-color: rgba(250, 250, 250, 0.3);
`;

export const FormButtonGroup = styled.div`
  margin-top: 28px;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 50px;
  }
`;

export const FormSubmitButton = styled(RectButton)`
  height: 45px;

  &:disabled {
    opacity: 0.4;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 59px;
  }
`;

export const FormGoogleButton = styled(RectLinkButton)`
  height: 45px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 59px;
  }
`;

export const FormNavLinkButton = styled(NavLink)`
  display: block;

  margin-top: 18px;

  font-size: 14px;
  line-height: calc(21 / 14);
  text-decoration-line: underline;

  color: ${({ theme }) => theme.colors.white[200]};

  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.green[200]};
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;
