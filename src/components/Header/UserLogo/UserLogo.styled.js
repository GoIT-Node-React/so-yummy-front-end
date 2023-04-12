import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  margin-left: auto;
  position: relative;
  margin-right: 24px;
  display: flex;
  column-gap: 14px;
  align-items: center;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-right: 50px;
  }
`;

export const UserAvatarWrapper = styled.div`
  width: 34px;
  height: 34px;

  border-radius: 50%;
  overflow: hidden;

  cursor: pointer;
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 44px;
    height: 44px;
  }
`;
export const Avatar = styled.img`
  max-width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const UserName = styled.p`
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: 170%;
  color: ${props => props.theme.colors.black[400]};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[2]};
  }
`;
