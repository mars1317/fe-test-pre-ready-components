import { TableRowPropsType } from 'types/TableRow';
import { ComponentStylesProps } from 'types/global';
import { createUseStyles } from 'react-jss';

const styles: ComponentStylesProps<TableRowPropsType> = {
  tableRow: (props) => ({
    display: 'table',
    width: '100%',
    tableLayout: 'fixed',
    cursor: props.onClick && 'pointer',
  }),
};

const createStyles = createUseStyles(styles);

export { createStyles };
