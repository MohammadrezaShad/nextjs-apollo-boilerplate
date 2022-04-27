import {FC} from 'react';

import type {GetLayout, LayoutProps} from '@/types/main';

import * as S from './main-layout.styled';

const DefaultLayout: FC<LayoutProps> = ({children}) => (
  <S.Wrapper>
    <S.Container>{children}</S.Container>
  </S.Wrapper>
);

export default DefaultLayout;

export const getDefaultLayout: GetLayout = (page, deviceType) => (
  <DefaultLayout deviceType={deviceType}>{page}</DefaultLayout>
);
