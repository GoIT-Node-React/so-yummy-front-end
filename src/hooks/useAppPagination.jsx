import usePagination from '@mui/material/usePagination/usePagination';
import Pagination from 'components/common/Pagination';
import { scrollToTop } from 'helpers';

export default function useAppPagination({ totalPages, page, onFetch }) {
  const { items } = usePagination({
    count: totalPages,
    defaultPage: 1,
    page: page,

    onChange: async evt => {
      const {
        target: { textContent, dataset },
      } = evt;
      const type = dataset.type;
      let newPage = page;

      switch (type) {
        case 'next':
          newPage += 1;
          break;
        case 'previous':
          newPage -= 1;
          break;
        case 'page':
          newPage = +textContent;
          break;
        default:
          break;
      }

      onFetch(newPage);
      scrollToTop(true);
    },
  });

  const Component = () => <Pagination items={items} />;

  return { items, Component };
}
