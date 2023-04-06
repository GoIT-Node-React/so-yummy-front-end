import React from 'react';
import { useState } from 'react';
import { privateApi } from 'services/api';
import {
  FormWrapper,
  Form,
  SearchFormField,
  SearchFormButton,
} from './SearchForm.styled';

export function SearchForm() {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('');

  console.log('searchValue', searchValue);

  const FetchREcipes = async () => {
    console.log(searchValue);

    try {
      const {
        data: { data },
      } = await privateApi.get(`/search?type=title&value=${searchValue}`);

      console.log('data', data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    FetchREcipes();
    setSearchValue('');
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <SearchFormField
          type="text"
          name="name"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search..."
        ></SearchFormField>
        <SearchFormButton>Search</SearchFormButton>
      </Form>
    </FormWrapper>
  );
}
