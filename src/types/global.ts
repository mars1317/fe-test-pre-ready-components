/* eslint-disable @typescript-eslint/no-explicit-any */
// React-JSS devs haven't delivered the full support for the TypeScript projects.
// There are no type signatures for the dynamic property functions returns.

export interface StylesPropsInterface {
  [key: string]: any;
}

export interface ComponentStylesProps<PropsInt> {
  [key: string]: { [key: string]: any } | ((props: PropsInt) => StylesPropsInterface);
}
