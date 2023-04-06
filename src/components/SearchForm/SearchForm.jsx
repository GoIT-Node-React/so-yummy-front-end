import {
  FormWrapper,
  Form,
  SearchFormField,
  SearchFormButton,
} from './SearchForm.styled';

export function SearchForm() {
  return (
    <FormWrapper>
      <Form>
        <SearchFormField></SearchFormField>
        <SearchFormButton>Search</SearchFormButton>
      </Form>
    </FormWrapper>
  );
}
