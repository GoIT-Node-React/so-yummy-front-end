import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 72px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 104px;
  }
`;
