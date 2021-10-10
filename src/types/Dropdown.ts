export interface DropdownOptionType {
  value: string;
  label?: string | JSX.Element;
  onOptionClick?: (
    optionValue: string,
    e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> | MouseEvent | KeyboardEvent,
  ) => void;
}

export interface DropdownPropsType {
  index: number,
  name: string;
  options: DropdownOptionType[];
}