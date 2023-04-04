import { SearchForm } from '../SearchForm/SearchForm';
import { SearchTypeSelector } from '../SearchTypeSelector/SearchTypeSelector';

import { SearchBarWrapper } from './SerchBar.styled';

export function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchForm />
      <SearchTypeSelector />
    </SearchBarWrapper>
  );
}
