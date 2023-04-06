import styled from '@emotion/styled';

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
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  line-height: 1.3;
  letter-spacing: -0.24px;
  color: #001833;

  @media (max-width: 767.98px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1439.98px) {
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
