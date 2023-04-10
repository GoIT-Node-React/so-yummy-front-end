import styled from '@emotion/styled';

export const StyledOtherCatBtn = styled.div`
  background-color: transparent;
  border-radius: 18px 44px;
  border: 2px solid var(--primary-green);
  padding: 14px 24px;
  min-width: 195px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--secondary-black);
  text-align: center;
  cursor: pointer;
  transition: background-color 250ms var(--transition-function),
    color 250ms var(--transition-function);
  &:hover {
    background-color: var(--primary-green);
    color: var(--primary-white);
  }
  @media screen and (min-width: 768px) {
    padding: 20px 39px;
    min-width: 239px;
    font-size: 16px;
  }
`;


export const StyledSeeAllBtn = styled.div`
  background: var(--primary-green);
  border-radius: 6px;
  border: none;
  min-width: 94px;
  padding: 10px 24px;
  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-white);
  text-align: center;
  cursor: pointer;
  transition: background-color 250ms var(--transition-function);
  &:hover {
    background-color: var(--secondary-black);
  }
`;