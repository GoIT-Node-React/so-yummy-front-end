import {
  PaginationItem,
  PaginationItemNext,
  PaginationItemPrev,
  PaginationList,
} from './Pagination.styled';

export default function Pagination({ items = [] }) {
  return (
    <PaginationList>
      {items?.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        switch (type) {
          case 'start-ellipsis':
          case 'end-ellipsis':
            children = '...';
            break;
          case 'next':
            children = (
              <PaginationItemNext type="button" selected={selected} {...item}>
                {`>`}
              </PaginationItemNext>
            );
            break;
          case 'previous':
            console.log(items);
            children = (
              <PaginationItemPrev type="button" selected={selected} {...item}>
                {`<`}
              </PaginationItemPrev>
            );
            break;
          default: // Page
            children = (
              <PaginationItem type="button" selected={selected} {...item}>
                {page}
              </PaginationItem>
            );
        }

        return <li key={index}>{children}</li>;
      })}
    </PaginationList>
  );
}
