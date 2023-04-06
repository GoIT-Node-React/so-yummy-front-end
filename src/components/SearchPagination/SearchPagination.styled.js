import styled from '@emotion/styled';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

export const SrarchPaginationListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SrarchPaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;
  margin-bottom: 100px;

  padding: 12px 24px;

  @media (max-width: 767.98px) {
    width: 275px;
    height: 51px;
  }

  @media (min-width: 767.98px) and (max-width: 1439.98px) {
    margin-bottom: 200px;
    width: 324px;
    height: 55px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
  }
`;

export const SrarchPaginationListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }

  @media (max-width: 767.98px) {
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
  }
`;

export const SrarchPaginationListButton = styled.button`
  background: #fafafa;
  background-color: aqua;
  border-radius: 50%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  color: #22252a;

  width: 27px;
  height: 27px;

  @media (max-width: 767.98px) {
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
  }
`;

export const PaginationArrowLeft = styled(RiArrowLeftSLine)`
  fill: rgba(169, 169, 169, 0.73);
  cursor: pointer;

  @media (max-width: 767.98px) {
    margin-right: 20px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    margin-right: 30px;
  }
`;

export const PaginationArrowRight = styled(RiArrowRightSLine)`
  fill: rgba(169, 169, 169, 0.73);
  cursor: pointer;

  @media (max-width: 767.98px) {
    margin-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    margin-left: 30px;
  }
`;
