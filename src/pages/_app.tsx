import '@/styles/global.css';

import { Source_Sans_Pro } from '@next/font/google';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

const ssp = Source_Sans_Pro({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-ssp',
});

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className={`${ssp.variable} font-body`}>
          <Component {...pageProps} />
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
