import styled from '@emotion/styled';
import Select from 'react-select';

export const SearchTypeSelectorWrapper = styled.div`
  display: flex;
  align-items: baseline;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 0.2px)) {
    margin-bottom: 42px;
  }

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    margin-bottom: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 90px;
  }
`;

export const SearchTypeSelectorText = styled.p`
  margin-right: 15px;

  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 1.3;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.gray[400]};

  @media (min-width: (${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`;

export const SelectControl = styled(Select)`
  .Select__control {
    width: 146px;
    height: 38px;

    padding-left: 8px;
    padding-right: 8px;
    background-color: rgba(217, 217, 217, 0.16);

    font-family: ${({ theme }) => theme.fonts.Poppins};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 0.7;
    letter-spacing: 0.02em;

    color: gray;
    border-radius: 6px 6px 6px 6px;
    border-color: black;
    border: none;
    box-shadow: none;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  }

  .Select__menu {
    margin-top: 0;
    margin-bottom: 0;
    padding: 4px 8px;

    box-shadow: none;
    background-color: rgba(250, 250, 250, 1);

    height: 76px;
    border-radius: 6px 6px 6px 6px;
    border-color: transparent;
  }

  .Select__option {
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
    font-family: ${({ theme }) => theme.fonts.Poppins};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 0.7;
    letter-spacing: 0.02em;
    color: grey;
    border-radius: 6px 6px 6px 6px;
    border: none;
    height: 28px;
    cursor: pointer;
    background-color: rgba(250, 250, 250, 1);

    &:hover,
    &:focus {
      background-color: rgba(217, 217, 217, 0.16);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  }
`;
