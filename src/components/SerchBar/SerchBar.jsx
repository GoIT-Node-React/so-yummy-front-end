import SearchForm from '../SearchForm';
import SearchTypeSelector from '../SearchTypeSelector';

import { SearchBarWrapper } from './SerchBar.styled';

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchForm />
      <SearchTypeSelector />
    </SearchBarWrapper>
  );
}
