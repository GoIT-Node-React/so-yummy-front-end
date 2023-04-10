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
              <PaginationItemNext
                type="button"
                selected={selected}
                {...item}
                data-type={type}
              >
                {`>`}
              </PaginationItemNext>
            );
            break;
          case 'previous':
            children = (
              <PaginationItemPrev
                type="button"
                selected={selected}
                {...item}
                data-type={type}
              >
                {`<`}
              </PaginationItemPrev>
            );
            break;
          default: // Page
            children = (
              <PaginationItem
                type="button"
                selected={selected}
                {...item}
                data-type={type}
              >
                {page}
              </PaginationItem>
            );
        }

        return <li key={index}>{children}</li>;
      })}
    </PaginationList>
  );
}
