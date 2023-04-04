import styled from '@emotion/styled';

export const Form = styled.form`
  @media (min-width: 375px) and (max-width: 767.98px) {
    display: flex;
    align-items: center;
    width: 295px;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid black;

    margin-bottom: 24px;
  }
`;

export const SearchFormField = styled.input`
  @media (min-width: 375px) and (max-width: 767.98px) {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const SearchFormButton = styled.button`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 113px;
    height: 53px;
    border: 0;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }
`;
