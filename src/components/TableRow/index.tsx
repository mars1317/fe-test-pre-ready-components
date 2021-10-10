import React from 'react';
import { TableRowPropsType } from 'types/TableRow';
import { createStyles } from './styles';

const TableRow = (props: TableRowPropsType): JSX.Element => {
  const classes = createStyles(props);
  const { onClick, children } = props;
  return (
    <tr className={classes.tableRow} onClick={(e): void => onClick && onClick(e)}>
      {children}
    </tr>
  );
};

export default TableRow;
