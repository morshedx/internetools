/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import Nav from 'components/nav';

const IndexPage = () => (
  <>
    <Head>
      <title>Internet Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <Nav />
      <h1>This is home page</h1>
    </Container>
  </>
);

export default IndexPage;
