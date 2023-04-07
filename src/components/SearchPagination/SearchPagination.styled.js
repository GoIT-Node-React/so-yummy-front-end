import styled from '@emotion/styled';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

export const SearchPaginationListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 100px;

  @media (min-width: 768px) and (max-width: 1439.98px) {
    margin-bottom: 200px;
  }

  @media (min-width: 1440px) {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`;

export const SearchPaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;

  padding: 12px 25px;

  @media (max-width: 767.98px) {
    width: 275px;
    height: 51px;
  }

  @media (min-width: 767.98px) and (max-width: 1439.98px) {
    width: 324px;
    height: 55px;
  }
`;

export const SearchPaginationListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const SearchPaginationListButton = styled.button`
  width: 27px;
  height: 27px;

  background-color: transparent;
  border-radius: 50%;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #656565;

  cursor: pointer;

  &:focus,
  &:hover {
    background-color: #ebf3d4;
  }
`;

export const SearchPaginationListArrowButton = styled.button`
  padding: 0;
  background-color: transparent;

  cursor: pointer;
`;

export const PaginationArrowLeft = styled(RiArrowLeftSLine)`
  padding: 0;
  fill: rgba(169, 169, 169, 0.73);
  cursor: pointer;
`;

export const PaginationArrowRight = styled(RiArrowRightSLine)`
  padding: 0;
  fill: rgba(169, 169, 169, 0.73);
  cursor: pointer;
`;
