import styled from '@emotion/styled';

export const Card = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 323px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;
export const RecipePicture = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const RecipeTitle = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  color: #3e4462;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  position: absolute;
  bottom: 26px;
  left: 18px;
  right: 18px;
`;