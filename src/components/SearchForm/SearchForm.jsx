import React, { useEffect, useContext, useCallback } from 'react';
// import { debounce } from 'debounce';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { privateApi } from 'services/api';
import { RecipesContext } from '../../contexts/searchedRecipes/Provider';
import { Status } from 'constants';
import {
  FormWrapper,
  Form,
  SearchFormField,
  SearchFormButton,
} from './SearchForm.styled';

export default function SearchForm() {
  const {
    searchedResipes,
    searchValue,
    searchType,
    status,
    updateRecipes,
    updatesearchValue,
    updateStatus,
  } = useContext(RecipesContext);

  const FetchREcipes = useCallback(async () => {
    updateStatus(Status.PENDING);

    try {
      const {
        data: { data },
      } = await privateApi.get(
        `/search?type=${searchType}&value=${searchValue}`
      );

      updateRecipes(data.recipes);
      updateStatus(Status.RESOLVED);

      console.log('data', data);
      console.log('searchedResipes', searchedResipes);
      console.log('searchType', searchType);
      console.log('searchValue', searchValue);
      console.log('status', status);
    } catch (error) {
      updateStatus(Status.REJECTED);
      console.log(error);
    }
  }, [
    updateRecipes,
    searchType,
    searchValue,
    updateStatus,
    searchedResipes,
    status,
  ]);

  const handleChange = event => {
    const { value } = event.target;
    updatesearchValue(value);
    console.log('Викликалась функція handleChange');
  };

  // const handleChange = debounce(event => {
  //   const { value } = event.target;
  //   updatesearchValue(value);
  //   console.log('Викликалась функція handleChange');
  // }, 300);

  const handleSubmit = event => {
    event.preventDefault();

    if (searchValue.trim() === '') {
      toast.warn("Введіть ім'я параметра у пошуку!");
      return;
    }

    FetchREcipes();
    // updatesearchValue('');
  };

  useEffect(() => {
    if (
      searchedResipes.length === 0 ||
      !searchValue ||
      searchValue.trim() === ''
    ) {
      return;
    }

    console.log('Рендер useEffect');
    FetchREcipes();
    // eslint-disable-next-line
  }, [searchType, searchValue]);

  return (
    <>
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
      <ToastContainer autoClose={3000} />
    </>
  );
}
