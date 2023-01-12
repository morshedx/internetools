import type { ReactNode } from 'react';
import { Fragment } from 'react';

import Container from '@/components/container';
import Footer from '@/components/footer';
import Header from '@/components/header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <Fragment>
    {props.meta}
    <Header />
    <main className="min-h-[calc(100vh-160px)]">
      <Container>{props.children}</Container>
    </main>
    <Footer />
  </Fragment>
);

export { Main };
