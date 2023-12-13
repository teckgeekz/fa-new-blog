import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
    <meta name="google-site-verification" content="Svqj5pHGiV9S8pYpkkDmQldmX2Jqaavu18oMvlNx0Ik" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
