import { TableHeaderPropsType } from 'types/TableHeader';
import { ComponentStylesProps } from 'types/global';
import { createUseStyles } from 'react-jss';

const styles: ComponentStylesProps<TableHeaderPropsType> = {
  tableHead: {
    backgroundColor: '#cbe0dd',
    display: 'block',
    width: '100%',
    font: {
      size: '1.4rem',
      lineHeight: '2rem',
      weight: 700,
      style: 'normal',
    },
    letterSpacing: '0.05rem',
    textTransform: 'uppercase',
    borderBottom: '2px solid #cecece',
  },
};

const createStyles = createUseStyles(styles);

export { createStyles };
