import React from 'react';
import { TableHeadingPropsType } from 'types/TableHeading';
import { createStyles } from './styles';

const TableHeading = (props: TableHeadingPropsType): JSX.Element => {
  const { children } = props;
  const classes = createStyles(props);
  return <th className={classes.tableHeading}>{children}</th>;
};

export default TableHeading;
