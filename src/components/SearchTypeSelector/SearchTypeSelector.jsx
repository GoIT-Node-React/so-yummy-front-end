import {
  SearchTypeSelectorWrapper,
  SearchTypeSelectorText,
  SearchTypeSelectorList,
  SearchTypeSelectorItem,
} from './SearchTypeSelector.styled';

export function SearchTypeSelector() {
  return (
    <SearchTypeSelectorWrapper>
      <SearchTypeSelectorText>Search by:</SearchTypeSelectorText>
      <SearchTypeSelectorList>
        <SearchTypeSelectorItem value="title">Title</SearchTypeSelectorItem>
        <SearchTypeSelectorItem value="ingredients">
          Ingredients
        </SearchTypeSelectorItem>
      </SearchTypeSelectorList>
    </SearchTypeSelectorWrapper>
  );
}
