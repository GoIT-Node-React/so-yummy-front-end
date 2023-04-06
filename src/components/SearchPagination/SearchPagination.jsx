import {
  SearchPaginationListWrapper,
  SearchPaginationList,
  SearchPaginationListItem,
  SearchPaginationListButton,
  SearchPaginationListArrowLeftButton,
  SearchPaginationListArrowRightButton,
  PaginationArrowLeft,
  PaginationArrowRight,
} from './SearchPagination.styled';

export function SearchPagination() {
  return (
    <SearchPaginationListWrapper>
      <SearchPaginationList>
        <SearchPaginationListItem>
          <SearchPaginationListArrowLeftButton>
            <PaginationArrowLeft size={24} />
          </SearchPaginationListArrowLeftButton>
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
          <SearchPaginationListArrowRightButton>
            <PaginationArrowRight size={24} />
          </SearchPaginationListArrowRightButton>
        </SearchPaginationListItem>
      </SearchPaginationList>
    </SearchPaginationListWrapper>
  );
}
