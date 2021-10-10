import React from 'react';
import { TableHeaderPropsType } from 'types/TableHeader';
import { createStyles } from './styles';

const TableHeader = (props: TableHeaderPropsType): JSX.Element => {
  const { children } = props;
  const classes = createStyles(props);
  return <thead className={classes.tableHead}>{children}</thead>;
};

export default TableHeader;
