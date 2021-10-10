import React from 'react';
import { TableCellPropsType } from 'types/TableCell';
import { createStyles } from './styles';

const TableCell = (props: TableCellPropsType): JSX.Element => {
  const classes = createStyles(props);
  const { children, onClick } = props;

  // Component actions
  const keyPressHandler = (e: React.KeyboardEvent<HTMLElement> | KeyboardEvent): void => {
    if (e.keyCode === 13) {
      if (onClick) {
        onClick(e);
      }
    }
  };
  return (
    <td
      className={classes.tableCell}
      onKeyDown={keyPressHandler}
      onClick={(e): void => onClick && onClick(e)}
      role="gridcell"
    >
      {children !== undefined ? children : ''}
    </td>
  );
};

export default TableCell;
