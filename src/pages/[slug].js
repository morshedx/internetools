/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from 'components/nav';

const SlugPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <title>Internet Tools | Dynamic Route</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Nav />
        <p>Hello, I'm the {asPath} page</p>
      </Container>
    </>
  );
};

export default SlugPage;
