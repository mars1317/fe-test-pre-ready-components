export interface TableCellPropsType {
  children: React.ReactNode;
  onClick?: (
    e?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | KeyboardEvent,
    ...args: unknown[]
  ) => void;
  width?: string;
}
