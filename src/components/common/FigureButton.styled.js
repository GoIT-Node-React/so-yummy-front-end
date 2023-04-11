import styled from '@emotion/styled';

export const MainButton = styled.button`
  width: ${props => props.w};
  height: ${props => props.h};
  padding: ${props => props.p};
  margin: ${props => props.m};

  border-radius: 24px 44px;

  font-size: ${props => props.fs};
  line-height: 1.5;

  color: ${props =>
    props.variant === 'white'
      ? props.theme.colors.black[400]
      : props.theme.colors.white[200]};

  background-color: ${props => {
    switch (props.variant) {
      case 'dark':
        return props.theme.colors.black[400];
      case 'green':
        return props.theme.colors.green[200];
      case 'white':
        return props.theme.colors.white[200];
      case 'transparent':
        return 'transparent';
      default:
        return 'green';
    }
  }};

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'])};

  &:hover {
    background-color: ${props => {
      switch (props.variant) {
        case 'dark':
          return props.theme.colors.green[200];
        case 'green':
          return props.theme.colors.black[400];
        case 'white':
          return props.theme.colors.green[200];
        case 'transparent':
          return props.theme.colors.white[200];
        default:
          return 'green';
      }
    }};

    color: ${props =>
      props.variant === 'transparent'
        ? props.theme.colors.green[200]
        : props.theme.colors.white[200]};
  }
`;
