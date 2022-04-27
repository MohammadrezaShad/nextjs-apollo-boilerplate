/* eslint-disable react/jsx-no-constructed-context-values */
import {ApolloProvider} from '@apollo/client';
import {NextComponentType, NextPageContext} from 'next';
import type {AppContext, AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';
import React, {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';

import MainLayout from '@/components/layouts/main';
import CookiesName from '@/constants/cookies-name';
import {ThemeTypes} from '@/constants/theme-types';
import DeviceTypeContext from '@/contexts/device-type-context';
import ThemeContext from '@/contexts/theme-context';
import {getCookie, setCookie} from '@/helpers/cookie';
import plazaUiTheme from '@/providers/theme/plaza-ui-theme';
import {useApollo} from '@/src/graphql/apollo/apollo-client';
// import GlobalStyle from '@/providers/theme/GlobalStyle';
import {DeviceType, GetLayout, ThemeType} from '@/types/main';
// import {reduxWrap} from '@/redux/store';
import CheckUserAgent from '@/utils/check-user-agent';

type AppExtendedProps = {
  previousTheme: ThemeType;
  deviceType: DeviceType;
  Component: NextComponentType<NextPageContext, unknown, Record<string, unknown>> & {
    getLayout: GetLayout;
  };
} & AppProps;

const App = ({Component, pageProps, previousTheme, deviceType}: AppExtendedProps) => {
  const apolloClient = useApollo(pageProps);
  const [theme, setTheme] = React.useState(previousTheme);

  const toggleTheme = async () => {
    if (theme === ThemeTypes.LIGHT) {
      setTheme(ThemeTypes.DARK);
      setCookie(CookiesName.Theme, ThemeTypes.DARK);
    } else {
      setTheme(ThemeTypes.LIGHT);
      setCookie(CookiesName.Theme, ThemeTypes.LIGHT);
    }
  };

  const getTheme = (themeName: ThemeType) => {
    switch (themeName) {
      case ThemeTypes.DARK:
        return plazaUiTheme;
      default:
        return plazaUiTheme;
    }
  };

  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <MainLayout deviceType={deviceType}>{page}</MainLayout>);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ThemeProvider theme={getTheme(theme)}>
          {/* <GlobalStyle /> */}

          {getLayout(
            <DeviceTypeContext.Provider value={{deviceType}}>
              <Component deviceType={deviceType} {...pageProps} />
            </DeviceTypeContext.Provider>,
            deviceType,
          )}
        </ThemeProvider>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
};

App.getInitialProps = async ({Component, ctx}: AppContext) => {
  let pageProps = {};
  let previousTheme = null;
  const userAgent = ctx.req.headers['user-agent'];
  const deviceType = CheckUserAgent(userAgent);

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  if (ctx.req) {
    previousTheme = await getCookie(CookiesName.Theme, ctx.req.headers.cookie);
  }
  return {
    pageProps,
    previousTheme,
    deviceType,
  };
};

export default appWithTranslation(App);
