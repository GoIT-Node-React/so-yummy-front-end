import React from 'react';
import {
  FormWrapper,
  Form,
  SearchFormField,
  SearchFormButton,
} from './SearchForm.styled';
import { useSearchContext } from 'contexts/Search.context';
import { warnNotification } from 'helpers';

export default function SearchForm() {
  const { query, updateQuery, fetchData } = useSearchContext();

  const handleChange = event => {
    const { value } = event.target;
    updateQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.length === 0) {
      return warnNotification('Enter the name of the parameter in the search!');
    }

    fetchData();
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <SearchFormField
          type="text"
          name="name"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
        />
        <SearchFormButton>Search</SearchFormButton>
      </Form>
    </FormWrapper>
  );
}
