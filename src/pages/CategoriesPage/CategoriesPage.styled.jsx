import styled from '@emotion/styled'

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 44px;
  }
`

export const TitleBox = styled.div`
  height: 192px;
  z-index: -1;
  box-sizing: border-box;
  width: 100%;
  margin-top: 53px;
  @media screen and (min-width: 768px) {
    height: 240px;
    margin-top: 73px;

  @media screen and (min-width: 1440px) {
    height: 308px;
    margin-top: 102px;
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.02em;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 32px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 44px;
      line-height: 44px;
    }
  }
`;

