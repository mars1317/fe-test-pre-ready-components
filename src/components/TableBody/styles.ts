import { createUseStyles } from 'react-jss';
import { TableBodyPropsType } from 'types/TableBody';
import { ComponentStylesProps } from 'types/global';
import Spinner from '../../images/spinner.svg';

const styles: ComponentStylesProps<TableBodyPropsType> = {
  tableBody: (props) => ({
    pointerEvents: props.loading && 'none',
    minHeight: props.loading && '25rem',
    overflowY: props.loading ? 'hidden' : 'auto',
    display: 'block',
    width: '100%',
    '&::after': {
      content: '""',
      display: props.loading ? 'block' : 'none',
      backgroundColor: 'rgba(0,0,0,0.03)',
      backgroundImage: props.loading && `url(${Spinner})`,
      backgroundSize: '12.5%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '100%',
      width: '100%',
    },
  }),
  noDataFallbackRow: {
    borderBottom: ['0.1rem', 'solid', '#000000'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataFallbackCell: {
    padding: {
      top: '2rem',
      bottom: '2rem',
    },
  },
};

const createStyles = createUseStyles(styles);

export { createStyles };
