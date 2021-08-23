import { MAX_PAGES_COUNT } from './constants';

export const handlePagesCounts = (
  pages: number[],
  pagesCount: number,
  currentPage: number
): void => {
  if (pagesCount > 5) {
    if (currentPage >= 3) {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
        if (i === MAX_PAGES_COUNT) break;
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
        if (i === MAX_PAGES_COUNT) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
};
