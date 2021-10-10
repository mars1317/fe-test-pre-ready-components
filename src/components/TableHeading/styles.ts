import { createUseStyles } from 'react-jss';
import { ComponentStylesProps } from 'types/global';
import { TableHeadingPropsType } from 'types/TableHeading';

const styles: ComponentStylesProps<TableHeadingPropsType> = {
  tableHeading: (props) => ({
    width: props.width || '7rem',
    boxSizing: 'border-box',
    textAlign: 'left',
    padding: {
      top: '2.4rem',
      bottom: '2rem',
      right: '1rem',
      left: '1rem',
    },
    letterSpacing: '0.05rem',
  }),
  headingWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
};

const createStyles = createUseStyles(styles);

export { createStyles };
