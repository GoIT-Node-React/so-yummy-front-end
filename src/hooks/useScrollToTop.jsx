import { scrollToTop } from 'helpers';
import { useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
};
