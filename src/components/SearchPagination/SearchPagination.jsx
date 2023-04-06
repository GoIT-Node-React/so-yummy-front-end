import {
  SrarchPaginationListWrapper,
  SrarchPaginationList,
  SrarchPaginationListItem,
  SrarchPaginationListButton,
  PaginationArrowLeft,
  PaginationArrowRight,
} from './SearchPagination.styled';

export function SearchPagination() {
  return (
    <SrarchPaginationListWrapper>
      <SrarchPaginationList>
        <PaginationArrowLeft size={36} />
        <SrarchPaginationListItem>
          <SrarchPaginationListButton>1</SrarchPaginationListButton>
        </SrarchPaginationListItem>
        <SrarchPaginationListItem>
          <SrarchPaginationListButton>2</SrarchPaginationListButton>
        </SrarchPaginationListItem>
        <SrarchPaginationListItem>
          <SrarchPaginationListButton>3</SrarchPaginationListButton>
        </SrarchPaginationListItem>
        <SrarchPaginationListItem>
          <SrarchPaginationListButton>4</SrarchPaginationListButton>
        </SrarchPaginationListItem>
        <SrarchPaginationListItem>
          <SrarchPaginationListButton>5</SrarchPaginationListButton>
        </SrarchPaginationListItem>
        <PaginationArrowRight size={36} />
      </SrarchPaginationList>
    </SrarchPaginationListWrapper>
  );
}
