import { ThemeProvider } from 'theme-ui';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import theme from 'utils/theme';
import { IpProvider } from 'context/ip-context';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export function reportWebVitals(metric) {
  // console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <IpProvider>
        <Component {...pageProps} />
      </IpProvider>
    </ThemeProvider>
  );
}

export default MyApp;
