import React from 'react';

import { TableBodyPropsType } from 'types/TableBody';
import { createStyles } from './styles';

const TableBody = (props: TableBodyPropsType): JSX.Element => {
  const { children, loading = false } = props;

  const classes = createStyles(props);
  return (
    <tbody className={classes.tableBody}>
      {!children || (children as JSX.Element[]).length < 1
        ? !loading && (
            // eslint-disable-next-line react/jsx-indent
            <tr className={classes.noDataFallbackRow}>
              <td className={classes.noDataFallbackCell}>No Data</td>
            </tr>
          )
        : children}
    </tbody>
  );
};
TableBody.displayName = 'TableBody';

export default TableBody;
