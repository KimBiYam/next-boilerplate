import Head from 'next/head';

export interface PageHeadProps {
  title: string;
  description: string;
  url?: string;
}

const PageHead = ({ description, title, url }: PageHeadProps) => (
  <Head>
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover"
    />
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="format-detection" content="telephone=no" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta name="description" content={description} />
  </Head>
);

export default PageHead;
