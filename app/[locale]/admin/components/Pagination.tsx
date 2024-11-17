import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={classnames('pagination-container', { [className!]: className })}>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div  >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M1.0835 8.99992C1.0835 5.26797 1.0835 3.40199 2.24287 2.24262C3.40223 1.08325 5.26821 1.08325 9.00016 1.08325C12.7321 1.08325 14.5981 1.08325 15.7575 2.24262C16.9168 3.40199 16.9168 5.26797 16.9168 8.99992C16.9168 12.7319 16.9168 14.5978 15.7575 15.7572C14.5981 16.9166 12.7321 16.9166 9.00016 16.9166C5.26821 16.9166 3.40223 16.9166 2.24287 15.7572C1.0835 14.5978 1.0835 12.7319 1.0835 8.99992Z" stroke="black"/>
<path d="M8.02778 5.6665L6.32425 7.42849C5.60808 8.16923 5.25 8.5396 5.25 8.99984C5.25 9.46007 5.60808 9.83044 6.32425 10.5712L8.02778 12.3332M12.75 5.6665L11.0465 7.42849C10.3303 8.16923 9.97222 8.5396 9.97222 8.99984C9.97222 9.46007 10.3303 9.83044 11.0465 10.5712L12.75 12.3332" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </li>
      {paginationRange.map((pageNumber:any, index:any) => {
        if (pageNumber === DOTS) {
          return <li key={index} className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            key={index}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="selected" >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M1.0835 8.99992C1.0835 5.26797 1.0835 3.40199 2.24287 2.24262C3.40223 1.08325 5.26821 1.08325 9.00016 1.08325C12.7321 1.08325 14.5981 1.08325 15.7575 2.24262C16.9168 3.40199 16.9168 5.26797 16.9168 8.99992C16.9168 12.7319 16.9168 14.5978 15.7575 15.7572C14.5981 16.9166 12.7321 16.9166 9.00016 16.9166C5.26821 16.9166 3.40223 16.9166 2.24287 15.7572C1.0835 14.5978 1.0835 12.7319 1.0835 8.99992Z" stroke="black"/>
<path d="M9.97222 5.6665L11.6758 7.42849C12.3919 8.16923 12.75 8.5396 12.75 8.99984C12.75 9.46007 12.3919 9.83044 11.6758 10.5712L9.97222 12.3332M5.25 5.6665L6.95353 7.42849C7.66969 8.16923 8.02778 8.5396 8.02778 8.99984C8.02778 9.46007 7.6697 9.83044 6.95353 10.5712L5.25 12.3332" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </li>
    </ul>
  );
};

export default Pagination;
