import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const RectButton = styled.button`
  width: ${props => props.w};
  height: ${props => props.h};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fs};
  line-height: 1.12;
  border-radius: ${props => props.theme.radii.md};

  background-color: ${props => {
    switch (props.variant) {
      case 'dark':
        return theme.colors.black[500];
      case 'green':
        return theme.colors.green[200];
      case 'gray':
        return theme.colors.gray[200];
      case 'greenToBlack':
        return theme.colors.green[200];
      default:
        return 'green';
    }
  }};

  color: ${props =>
    props.variant === 'gray'
      ? theme.colors.black[200]
      : theme.colors.white[200]};
  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'])};

  &:hover {
    background-color: ${props => {
      switch (props.variant) {
        case 'dark':
          return theme.colors.black[500];
        case 'green':
          return theme.colors.green[200];
        case 'gray':
          return theme.colors.white[200];
        case 'greenToBlack':
          return theme.colors.black[400];
        default:
          return 'green';
      }
    }};

    color: ${props => {
      switch (props.variant) {
        case 'dark':
          return theme.colors.green[200];
        case 'green':
          return theme.colors.black[400];
        case 'gray':
          return theme.colors.black[200];
        case 'greenToBlack':
          return theme.colors.white[200];
        default:
          return 'green';
      }
    }};

    border-width: ${props => (props.variant === 'gray' ? '1px' : '0')};
    border-style: solid;
    border-color: ${props => props.theme.colors.black[200]};
  }
`;

export const RectLinkButton = styled.a`
  width: ${props => props.w};
  height: ${props => props.h};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fs};
  line-height: 1.12;
  border-radius: ${props => props.theme.radii.md};

  background-color: ${props => {
    switch (props.variant) {
      case 'dark':
        return theme.colors.black[500];
      case 'green':
        return theme.colors.green[200];
      case 'gray':
        return theme.colors.gray[200];
      case 'greenToBlack':
        return theme.colors.green[200];
      default:
        return 'green';
    }
  }};

  color: ${props =>
    props.variant === 'gray'
      ? theme.colors.black[200]
      : theme.colors.white[200]};
  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'])};

  &:hover {
    background-color: ${props => {
      switch (props.variant) {
        case 'dark':
          return theme.colors.black[500];
        case 'green':
          return theme.colors.green[200];
        case 'gray':
          return theme.colors.white[200];
        case 'greenToBlack':
          return theme.colors.black[400];
        default:
          return 'green';
      }
    }};

    color: ${props => {
      switch (props.variant) {
        case 'dark':
          return theme.colors.green[200];
        case 'green':
          return theme.colors.black[400];
        case 'gray':
          return theme.colors.black[200];
        case 'greenToBlack':
          return theme.colors.white[200];
        default:
          return 'green';
      }
    }};

    border-width: ${props => (props.variant === 'gray' ? '1px' : '0')};
    border-style: solid;
    border-color: ${props => props.theme.colors.black[200]};
  }
`;
