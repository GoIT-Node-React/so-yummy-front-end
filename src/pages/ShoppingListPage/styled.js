import styled from '@emotion/styled';

export const ShoppingListSection = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    padding-top: 72px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    padding-top: 100px;
  }
`;

export const ShoppingListTitle = styled.h2`
  margin-bottom: 50px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #001833;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-bottom: 72px;

    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 44px;
  }
`;
