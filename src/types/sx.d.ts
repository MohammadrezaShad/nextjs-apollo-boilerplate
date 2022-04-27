import { CSSObject, DefaultTheme } from 'styled-components';

export type CSSObjectValue = CSSObject | string | number | undefined;

export interface CSSObjectWithTheme {
    [key: string]: CSSObjectValue | ((theme: DefaultTheme) => CSSObjectValue);
}

export type SxType = CSSObjectWithTheme | CSSObject;
