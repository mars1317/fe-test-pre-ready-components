import React, { useState, useEffect } from 'react';
import { DropdownPropsType } from 'types/Dropdown';
import { createStyles } from './styles';

const Dropdown = React.forwardRef<HTMLDivElement, DropdownPropsType>((props, ref) => {
  // Local state
  const [openDropdown, setOpenDropdown] = useState(false);

  // Component actions
  const onDropdownClick = (e: React.SyntheticEvent): void => {
    setOpenDropdown(!openDropdown);
  };

  // Close dropdown on any click outside the dropdown itself or it's options (except for the other dropdowns click).
  function onDocumentClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (!target.dataset['dropdown-option'] && openDropdown === true) {
      setOpenDropdown(false);
    }
  }

  // Effects
  useEffect(() => {
    document.addEventListener('click', onDocumentClick);
    return (): void => {
      document.removeEventListener('click', onDocumentClick);
    };
  });

  const keyPressHandler = (
    e: React.KeyboardEvent<HTMLLIElement> | KeyboardEvent,
    optionValue: string,
    callback?: (optionValueProp: string, evt: React.KeyboardEvent<HTMLLIElement> | KeyboardEvent) => void,
  ): void => {
    console.log('option', optionValue)
    if (e.keyCode === 13) {
      if (callback) {
        callback(optionValue, e);
      }
    }
  };

  const { name, options } = props;
  const classes = createStyles(props);
  return (
    <div className={classes.dropdownWrapper} ref={ref}>
      <button type="button" onClick={onDropdownClick} className={classes.button}>
        {name}
      </button>
      {openDropdown && (
        <ul className={classes.optionsList} role="menu">
          {options.map((option) => {
            const optionKey = `option_value-${option.value}_label-${option.label}`;
            return (
              <li
                className={classes.option}
                key={optionKey}
                data-value={option.value}
                data-role="dropdown-option"
                onClick={(e: React.MouseEvent<HTMLLIElement>): void => {
                  onDropdownClick(e);
                  if (option.onOptionClick) {
                    option.onOptionClick(option.value, e);
                  }
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLLIElement>): void => {
                  e.stopPropagation();
                  keyPressHandler(e, option.value, option.onOptionClick);
                }}
                role="menuitem"
                tabIndex={0}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});
Dropdown.displayName = 'Dropdown';

export default Dropdown;