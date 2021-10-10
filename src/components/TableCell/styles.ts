import { createUseStyles } from 'react-jss';
import { ComponentStylesProps } from 'types/global';
import * as types from 'types/TableCell';

const styles: ComponentStylesProps<types.TableCellPropsType> = {
  tableCell: (props) => ({
    width: props.width || '7rem',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: {
      top: '2.6rem',
      bottom: '2.6rem',
      right: '1rem',
      left: '5rem',
    },
    wordWrap: 'break-word',
    font: {
      size: '1.6rem',
      lineHeight: '2.4rem',
      letterSpacing: '3%',
      style: 'normal',
    },
    letterSpacing: '0.02rem',
    cursor: props.onClick && 'pointer',
  }),
};

const createStyles = createUseStyles(styles);

export { createStyles };
