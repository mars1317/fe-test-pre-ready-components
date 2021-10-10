import { createUseStyles } from 'react-jss';
import { DropdownPropsType } from 'types/Dropdown';
import { ComponentStylesProps } from 'types/global';

const styles: ComponentStylesProps<DropdownPropsType> = {
  button: {
    borderRadius: '2px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '0.03rem',
    '&:focus': {
      outline: ['none'],
    },
    cursor: 'pointer',
    color: '#2d4848',
    backgroundColor: '#cbe0dd',
    boxShadow: {
      x: '0rem',
      y: '0.4rem',
      blur: '0.8rem',
      color: 'rgba(0, 0, 0, 0.14)',
    },
    border: '2px solid #cbe0dd',
    textTransform: 'uppercase',
    padding: '1rem 2rem',
    '&:hover': {
      backgroundColor: '#93c8c8',
      border: '2px solid #93c8c8',
    }
  },
  dropdownWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  optionsList: {
    margin: [0],
    width: '100%',
    position: 'absolute',
    borderRadius: '2px 2px 6px 6px',
    listStyle: 'none',
    backgroundColor: '#FFFFFF',
    zIndex: 100,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.14)',
    padding: [0],
    overflow: 'hidden',
    letterSpacing: '0.02rem',
  },
  option: {
    font: {
      family: 'Lato, sans-serif',
      size: '1.2rem',
      lineHeight: '1.8rem',
      weight: 400,
    },
    boxSizing: 'border-box',
    padding: '10px 25px;',
    borderBottom: '1px solid #eeeeee',
    cursor: 'pointer',
    '&:last-of-type': {
      '&::after': {
        display: 'none',
      },
    },
    '&:hover': {
      backgroundColor: '#eaf6f5'
    }
  },
};
const createStyles = createUseStyles(styles);

export { createStyles };
