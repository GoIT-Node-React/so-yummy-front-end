import styled from '@emotion/styled';

export const ShoppingListSection = styled.section``;

export const ShoppingListTitle = styled.p`
  margin-top: 50px;
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
    margin-top: 72px;
    margin-bottom: 72px;

    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-top: 100px;
    font-size: 44px;
  }
`;
