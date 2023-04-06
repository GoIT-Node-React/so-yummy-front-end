import React from 'react';
import { privateApi } from 'services/api';
import {
  FormWrapper,
  Form,
  SearchFormField,
  SearchFormButton,
} from './SearchForm.styled';

import { RecipesContext } from '../../contexts/searchedRecipes/Provider';
import { useContext } from 'react';

export function SearchForm() {
  const {
    searchedResipes,
    searchValue,
    searchType,
    updateRecipes,
    updatesearchValue,
  } = useContext(RecipesContext);

  const FetchREcipes = async () => {
    console.log(searchValue);

    try {
      const {
        data: { data },
      } = await privateApi.get(
        `/search?type=${searchType}&value=${searchValue}`
      );

      updateRecipes(data.recipes);

      console.log('data', data);
      console.log('searchedResipes', searchedResipes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { value } = event.target;
    updatesearchValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    FetchREcipes();
    updatesearchValue('');
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
