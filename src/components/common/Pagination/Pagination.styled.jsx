import styled from '@emotion/styled';

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: fit-content;
  margin: 0 auto 0;
  margin-top: 50px;
  padding: 14px 24px;

  background: ${({ theme }) => theme.colors.white[100]};
  border-radius: 26px;

  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 0.2px)) {
    padding: 14px 14px;
  }
`;

export const PaginationItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 27px;
  height: 27px;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(18 / 12);
  font-feature-settings: 'ss04' on;

  color: ${({ selected, theme }) =>
    selected ? theme.colors.black[400] : theme.colors.gray[900]};

  border-radius: 50%;

  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.green[100] : 'transparent'};
`;

export const PaginationItemPrev = styled(PaginationItem)`
  padding-left: 0;
  padding-right: 0;

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 0.2px)) {
    margin-right: 5px;
  }

  margin-right: 10px;
  font-size: 24px;

  &:disabled {
    color: rgba(169, 169, 169, 0.73);
  }
`;

export const PaginationItemNext = styled(PaginationItem)`
  padding-left: 0;
  padding-right: 0;

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 0.2px)) {
    margin-left: 5px;
  }

  margin-left: 10px;
  font-size: 24px;

  &:disabled {
    color: rgba(169, 169, 169, 0.73);
  }
`;
