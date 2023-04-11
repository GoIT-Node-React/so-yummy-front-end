import React from 'react';
import { Form, SearchFormField } from '../../SearchForm/SearchForm.styled.js';
import { SearchFormButton, FormWrapper } from './MainPageSearchForm.styled.js';
import { useNavigate } from 'react-router-dom';
import { routes } from 'constants/routes.js';

export default function MainPageSearchForm() {
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();

    const query = event.target.elements['name'].value;

    navigate(`${routes.SEARCH_PAGE}?type=title&value=${query}`);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <SearchFormField type="text" name="name" placeholder="Search..." />
        <SearchFormButton>Search</SearchFormButton>
      </Form>
    </FormWrapper>
  );
}
