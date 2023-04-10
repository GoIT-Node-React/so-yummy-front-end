import styled from '@emotion/styled';


export const Title = styled.h1`
width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: var(--title-color);
  
  @media screen and (min-width: 768px) {
    font-size: 32px;
    padding-top: 72px;
    padding-bottom: 100px;
    
  }
  @media screen and (min-width: 1440px) {
    padding-top: 100px;
    padding-bottom: 100px;
    font-size: 44px;
    
  } ;
`;