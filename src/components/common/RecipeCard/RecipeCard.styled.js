import styled from '@emotion/styled';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const Container = styled.div`
  position: relative;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.white[100]};
  display: flex;
  width: 343px;
  height: 152px;
  padding: ${props => (props.myRecipes ? '14px 9px' : '14px')};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 704px;
    height: 288px;
    padding: 28px 24px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 1240px;
    height: 404px;
    padding: 40px;
  }
`;

export const Image = styled.img`
  width: 124px;
  height: 124px;
  border-radius: ${({ theme }) => theme.radii.lg};
  object-fit: cover;
  margin-right: 14px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 228px;
    height: 232px;
    margin-right: 24px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 318px;
    height: 324px;
    margin-right: 40px;
  }
`;

export const Content = styled.div``;

export const TitleContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    height: 38px;
    align-items: flex-start;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    height: 44px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1;
  letter-spacing: -0.24px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const DeleteBin = styled(RiDeleteBin6Line)`
  width: 10px;
  height: 12px;
  color: ${props =>
    props.myRecipes
      ? props.theme.colors.white[200]
      : props.theme.colors.black[400]};

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 16px;
    height: 18px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 18px;
    height: 20px;
  }
`;

export const BinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${props =>
    props.myRecipes
      ? props.theme.colors.green[200]
      : props.theme.colors.green[100]};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.create(['background-color'])};
  &:hover {
    background-color: ${props =>
      props.myRecipes
        ? props.theme.colors.black[200]
        : props.theme.colors.green[200]};
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    position: absolute;
    top: 28px;
    right: 24px;
    width: 38px;
    height: 38px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 44px;
    height: 44px;
    top: 40px;
    right: 40px;
  }
`;

export const Text = styled.p`
  margin-top: ${props => (props.myRecipes ? '10px' : '14px')};
  max-height: ${props => (props.myRecipes ? '51px' : '57px')};
  width: ${props => (props.myRecipes ? '163px' : '173px')};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -2%;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.3;
    max-height: ${props => (props.myRecipes ? '107px' : '73px')};
    width: ${props => (props.myRecipes ? '353px' : '298px')};
    margin-top: 22px;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: ${props => (props.myRecipes ? '806px' : '679px')};
    max-height: ${props => (props.myRecipes ? '134px' : '158px')};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    margin-top: ${props => (props.myRecipes ? '20px' : '30px')};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 27px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    height: 45px;
  }
`;

export const Time = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.gray[500]};
  line-height: 1.4;
  letter-spacing: -0.24px;

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.43;
  }
`;
