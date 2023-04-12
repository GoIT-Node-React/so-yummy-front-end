import styled from '@emotion/styled';
import { Container as StyledContainer } from '../common/Container.styled';

export const Container = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1px;
  padding-bottom: 1px;

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    justify-content: start;
  }
`;
export const StyledHeader = styled.header`
  position: relative;
  z-index: 2;

  padding-top: 18px;
`;
