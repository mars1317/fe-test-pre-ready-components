import React, { useState, useRef, useEffect } from 'react';
import { TablePropsType } from 'types/Table';
import { createStyles } from './styles';
import { GroupDTO } from 'types/Group';

const Table = (props: TablePropsType): JSX.Element => {
  const { children, pagination } = props;

  // Common data
  const minimalPage = pagination?.minPage ?? 1;

  // React refs
  const prevPageRef = useRef<null | number>(null);

  // React state
  const [currentPage, setCurrentPage] = useState<number>(minimalPage);

  // Component actions
  function increaseNumber(): void {
    setCurrentPage((prevVal) => {
      if (pagination && pagination.maxPage !== undefined) {
        return prevVal >= pagination.maxPage ? prevVal : prevVal + 1;
      }
      return prevVal + 1;
    });

  }

  function decreaseNumber(): void {
    setCurrentPage((prevVal) => {
      return prevVal <= minimalPage ? prevVal : prevVal - 1;
    });
  }

  // React effects
  useEffect(() => {
    if (prevPageRef.current !== currentPage) {
      if (pagination?.onPageChange) {
        pagination.onPageChange(currentPage);
      }
      prevPageRef.current = currentPage;
    }
  }, [currentPage]);

  useEffect(() => {
    if (pagination?.maxPage && currentPage > pagination.maxPage) {
      setCurrentPage(pagination.maxPage);
    }
  }, [pagination?.maxPage]);

  const classes = createStyles(props);
  return (
    <div className={classes.tableWrapper}>
      <table className={classes.table} role="grid">
        {children}
      </table>
      {pagination && (
        <div className={classes.paginationController}>
          <button type="button" onClick={decreaseNumber}>
            {'❮'}
          </button>
          <div className={classes.currentPageNumber}>{currentPage}</div>
          <button type="button" onClick={increaseNumber}>
            {'❯'}
          </button>
        </div>
      )}
    </div>
  );
};
Table.displayName = 'Table';

export default Table;