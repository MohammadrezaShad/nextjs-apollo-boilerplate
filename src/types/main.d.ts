/* eslint-disable no-unused-vars */
import {FC, ReactChild, ReactNode} from 'react';

import {DeviceTypes} from '@/constants/device-types';
import {ThemeTypes} from '@/constants/theme-types';

export type GetLayout = (page: ReactChild, deviceType?: DeviceType) => JSX.Element;
export type DeviceType = typeof DeviceTypes.MOBILE | typeof DeviceTypes.DESKTOP;
export type ThemeType = typeof ThemeTypes.DARK | typeof ThemeTypes.LIGHT;

export type ReactComponent<T> = FC<T> & {getLayout: GetLayout};

export type LayoutProps = {
  children: ReactNode;
  deviceType: DeviceType;
};

export type ValueOf<T> = T[keyof T];

export type Component = React.ElementType | keyof JSX.IntrinsicElements;
