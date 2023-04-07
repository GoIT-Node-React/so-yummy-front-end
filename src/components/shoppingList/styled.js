import styled from '@emotion/styled';

// const Button = styled.button`
//   color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
// `;

export const ShoppingListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #8baa36;
  color: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 10px;
  margin-bottom: 32px;
  border-radius: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-bottom: 50px;
    padding: 20px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-bottom: 50px;
    padding: 21px 40px;
  }
`;

export const HeaderText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;

  color: #fafafa;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: 18px;
    letter-spacing: 0.03em;
  } ;
`;

export const NumberRemoveWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    gap: 78px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    gap: 142px;
  } ;
`;

export const ShoppingListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 24px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  border-bottom: 1px solid #e0e0e0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    padding-left: 0;
    padding-right: 20px;
    padding-bottom: 43px;

    &:not(:last-child) {
      margin-bottom: 44px;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    padding-left: 40px;
    padding-right: 40px;
  } ;
`;

export const ShoppingList = styled.ul``;

export const ProductNameAndImgWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ProductName = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;

  color: #3e4462;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const NumberAndDelWrap = styled.div`
  display: flex;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    gap: 78px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    gap:142px;
  }
`;
export const Number = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;

  width: 37px;
  height: 23px;
  text-align: center;
  padding: 4px 0px;
  border-radius: 4px;

  background: #8baa36;
  color: #fafafa;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: 18px;
    width: 68px;
    height: 35px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    
    width: 75px;
    height: 35px;
  }
`;

export const Img = styled.img`
  border-radius: 6px;
  margin-right: 10px;

  background: #ebf3d4;

  width: 60px;
  height: 60px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-right: 16px;
    border-radius: 6px;

    width: 93px;
    height: 97px;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;

  cursor: pointer;
  background: inherit;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;

export const NumberWrap = styled.div`
  display: flex;
  justify-content: center;

  min-width: 65px;
  background: inherit;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    min-width: 75px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 65px;
  background: inherit;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 75px;
  }
`;
