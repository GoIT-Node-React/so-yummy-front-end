import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    margin-top: -18px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: -86px;
  }
`;

export const Section = styled.section`
  margin-bottom: -100px;
`;