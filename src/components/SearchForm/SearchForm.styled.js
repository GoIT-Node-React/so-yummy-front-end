import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const FormWrapper = styled.div`
  @media (min-width: 375px) and (max-width: 767.98px) {
    width: 296px;
    height: 54px;

    margin-bottom: 24px;

    background-color: #f0f0f0;
    clip-path: inset(0px 0px 0px 0px round 20px 50px 20px 50px);
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 363px;
    height: 57px;

    margin-bottom: 28px;

    background-color: #f0f0f0;
    clip-path: inset(0px 0px 0px 0px round 20px 50px 20px 50px);
  }

  @media (min-width: 1440px) {
    width: 511px;
    height: 71px;

    margin-bottom: 28px;

    background-color: #f0f0f0;
    clip-path: inset(0px 0px 0px 0px round 20px 50px 20px 50px);
  }
`;

export const Form = styled.form`
  position: relative;

  @media (min-width: 375px) and (max-width: 767.98px) {
    display: flex;
    align-items: center;
    background-color: #fff;
    overflow: hidden;

    width: 295px;
    height: 53px;

    margin-bottom: 24px;

    clip-path: inset(2px 1px 1px 2px round 20px 50px 20px 50px);
    padding: 16px 32px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    display: flex;
    align-items: center;
    background-color: #fff;
    overflow: hidden;

    width: 363px;
    height: 57px;

    margin-bottom: 24px;

    clip-path: inset(2px 1px 1px 2px round 20px 50px 20px 50px);
    padding: 16px 32px;
  }

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    background-color: #fff;
    overflow: hidden;

    width: 510px;
    height: 71px;

    margin-bottom: 28px;

    clip-path: inset(2px 1px 1px 2px round 20px 50px 20px 50px);
    padding: 16px 32px;
  }
`;

export const SearchFormField = styled.input`
  @media (min-width: 375px) and (max-width: 767.98px) {
    display: inline-block;
    width: 117px;
    height: 21px;
    font: inherit;
    font-size: 12px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    margin-right: 33px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    display: inline-block;
    width: 117px;
    height: 21px;
    font: inherit;
    font-size: 14px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    margin-right: 33px;
  }

  @media (min-width: 1440px) {
    display: inline-block;
    width: 117px;
    height: 21px;
    font: inherit;
    font-size: 16px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    margin-right: 33px;
  }
`;

export const SearchFormButton = styled.button`
  position: absolute;
  right: 0;

  width: 113px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fs};
  line-height: 1.5;

  clip-path: inset(26px 0px 24px 0px round 15px 35px 15px 35px);
  padding: 50px 42px;

  margin: ${props => props.m};

  background-color: ${props => {
    switch (props.variant) {
      case 'dark':
        return theme.colors.black[400];
      case 'green':
        return theme.colors.green[200];
      case 'white':
        return theme.colors.white[200];
      case 'transparent':
        return 'transparent';
      default:
        return 'green';
    }
  }};

  color: ${props =>
    props.variant === 'white'
      ? theme.colors.black[400]
      : theme.colors.white[200]};

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'])};

  &:hover {
    background-color: ${props => {
      switch (props.variant) {
        case 'dark':
          return theme.colors.green[200];
        case 'green':
          return theme.colors.black[400];
        case 'white':
          return theme.colors.green[200];
        case 'transparent':
          return theme.colors.white[200];
        default:
          return 'green';
      }
    }};

    color: ${props =>
      props.variant === 'transparent'
        ? theme.colors.green[200]
        : theme.colors.white[200]};
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 161px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.fs};
    line-height: 1.5;

    clip-path: inset(24px 0px 23px 0px round 15px 35px 15px 35px);
    padding: 50px 42px;

    margin: ${props => props.m};

    background-color: ${props => {
      switch (props.variant) {
        case 'dark':
          return theme.colors.black[400];
        case 'green':
          return theme.colors.green[200];
        case 'white':
          return theme.colors.white[200];
        case 'transparent':
          return 'transparent';
        default:
          return 'green';
      }
    }};

    color: ${props =>
      props.variant === 'white'
        ? theme.colors.black[400]
        : theme.colors.white[200]};

    transition: ${({ theme }) =>
      theme.transitions.create(['color', 'background-color'])};

    &:hover {
      background-color: ${props => {
        switch (props.variant) {
          case 'dark':
            return theme.colors.green[200];
          case 'green':
            return theme.colors.black[400];
          case 'white':
            return theme.colors.green[200];
          case 'transparent':
            return theme.colors.white[200];
          default:
            return 'green';
        }
      }};

      color: ${props =>
        props.variant === 'transparent'
          ? theme.colors.green[200]
          : theme.colors.white[200]};
    }
  }

  @media (min-width: 1440px) {
    width: 161px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.fs};
    line-height: 1.5;

    clip-path: inset(24px 0px 23px 0px round 15px 45px 15px 45px);
    padding: 57px 42px;

    margin: ${props => props.m};

    background-color: ${props => {
      switch (props.variant) {
        case 'dark':
          return theme.colors.black[400];
        case 'green':
          return theme.colors.green[200];
        case 'white':
          return theme.colors.white[200];
        case 'transparent':
          return 'transparent';
        default:
          return 'green';
      }
    }};

    color: ${props =>
      props.variant === 'white'
        ? theme.colors.black[400]
        : theme.colors.white[200]};

    transition: ${({ theme }) =>
      theme.transitions.create(['color', 'background-color'])};

    &:hover {
      background-color: ${props => {
        switch (props.variant) {
          case 'dark':
            return theme.colors.green[200];
          case 'green':
            return theme.colors.black[400];
          case 'white':
            return theme.colors.green[200];
          case 'transparent':
            return theme.colors.white[200];
          default:
            return 'green';
        }
      }};

      color: ${props =>
        props.variant === 'transparent'
          ? theme.colors.green[200]
          : theme.colors.white[200]};
    }
  }
`;
