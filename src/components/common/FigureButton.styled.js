import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const FigureButton = styled.button`
  width: ${props => props.w};
  height: ${props => props.h};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fs};
  line-height: 1.5;
  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);

  padding: ${props => props.p};
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
`;
