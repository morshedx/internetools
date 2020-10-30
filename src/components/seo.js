import Head from 'next/head';

const Seo = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title ?? 'IP Info'}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

export default Seo;
