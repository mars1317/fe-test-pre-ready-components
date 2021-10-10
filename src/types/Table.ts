export interface TablePaginationObject {
  /**
   * The page from which the pagination starts
   */
  minPage?: number;
  /**
   * Page limit
   */
  maxPage?: number;
  /**
   * A function that is called whenever the page is 'turned'.
   */
  onPageChange?: (currentPage: number) => unknown;
}
export interface TablePropsType {
  /**
   * Turns on and sets up the pagination mechanic in the component.
   */
  pagination?: TablePaginationObject;
  /**
   * The element's children elements. Should be only tbody, thead or tfoot.
   */
  children: React.ReactNode;
}
