export interface TableRowPropsType {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLTableRowElement, MouseEvent>, ...args: unknown[]) => void;
}
