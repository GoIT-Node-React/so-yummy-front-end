import styled from '@emotion/styled';
import Select from 'react-select';

export const SearchTypeSelectorWrapper = styled.div`
  display: flex;
  align-items: baseline;

  @media (max-width: 767.98px) {
    margin-bottom: 42px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 90px;
  }
`;

export const SearchTypeSelectorText = styled.p`
  margin-right: 15px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  line-height: 1.3;
  letter-spacing: -0.24px;
  color: #001833;

  @media (min-width: 768px) and (max-width: 1439.98px) {
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const SelectControl = styled(Select)`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
