import { Form, SearchFormField, SearchFormButton } from './SearchForm.styled';

export function SearchForm() {
  return (
    <Form>
      <SearchFormField></SearchFormField>
      <SearchFormButton>Search</SearchFormButton>
    </Form>
  );
}
