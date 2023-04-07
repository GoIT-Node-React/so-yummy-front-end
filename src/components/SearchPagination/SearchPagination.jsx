import {
  SearchPaginationListWrapper,
  SearchPaginationList,
  SearchPaginationListItem,
  SearchPaginationListButton,
  SearchPaginationListArrowButton,
  PaginationArrowLeft,
  PaginationArrowRight,
} from './SearchPagination.styled';

export default function SearchPagination() {
  return (
    <SearchPaginationListWrapper>
      <SearchPaginationList>
        <SearchPaginationListItem>
          <SearchPaginationListArrowButton>
            <PaginationArrowLeft size={24} />
          </SearchPaginationListArrowButton>
        </SearchPaginationListItem>
        <SearchPaginationListItem>
          <SearchPaginationListButton>1</SearchPaginationListButton>
        </SearchPaginationListItem>
        <SearchPaginationListItem>
          <SearchPaginationListButton>2</SearchPaginationListButton>
        </SearchPaginationListItem>
        <SearchPaginationListItem>
          <SearchPaginationListButton>3</SearchPaginationListButton>
        </SearchPaginationListItem>
        <SearchPaginationListItem>
          <SearchPaginationListButton>4</SearchPaginationListButton>
        </SearchPaginationListItem>
        <SearchPaginationListItem>
          <SearchPaginationListButton>5</SearchPaginationListButton>
        </SearchPaginationListItem>
        <SearchPaginationListItem>
          <SearchPaginationListArrowButton>
            <PaginationArrowRight size={24} />
          </SearchPaginationListArrowButton>
        </SearchPaginationListItem>
      </SearchPaginationList>
    </SearchPaginationListWrapper>
  );
}
