import {
  NavLink,
  useNavigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { useContext } from 'react';
import { RecipesContext } from '../../contexts/searchedRecipes/Provider';

import {
  FormWrapper,
  Form,
  SearchFormField,
  SearchFormButton,
} from '../../components/SearchForm/SearchForm.styled';

export default function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { searchValue, updatesearchValue, updatesearchType, updateselect } =
    useContext(RecipesContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('type') ?? '';
  console.log('search', search);

  const handleSubmit = event => {
    event.preventDefault();
    updatesearchType('title');
    navigate('/search?type=title&value=chicken');
  };

  const handleChange = event => {
    const { value } = event.target;
    updatesearchValue(value);
  };

  const changeType = () => {
    updatesearchType('ingredient');
    // updateselect({ value: 'ingredient', label: 'Ingredients' });
  };

  return (
    <>
      <h1>Welcome to the app!</h1>
      <div>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            {/* <Form> */}
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
        <NavLink to={`/search?type=ingredient`} onClick={changeType}>
          Ingredients
        </NavLink>
      </div>
    </>
  );
}
