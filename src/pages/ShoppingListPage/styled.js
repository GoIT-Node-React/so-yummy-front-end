import styled from '@emotion/styled';

export const ShoppingListSection = styled.div`
  background: #FAFAFA;
`;

export const ShoppingListTitle = styled.p`
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
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 44px;
  }
`;