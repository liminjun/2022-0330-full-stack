import Link from 'next/link';
import Head from 'next/head';
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPost() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Name is liminjun. I am a Web developer who work in a cloud and d</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}