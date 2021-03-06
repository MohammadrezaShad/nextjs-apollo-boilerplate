import {gql, useQuery} from '@apollo/client';
import type {GetServerSidePropsContext, NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import Test from '@/src/components/views/test';
import {addApolloState, initializeApollo} from '@/src/graphql/apollo/apollo-client';
import {BRANDS_QUERY} from '@/src/graphql/operations/query/brands';

import styles from '../../styles/Home.module.css';

const Wrap = styled.div`
  background-color: ${({theme}) => theme.colors.danger.origin}; ;
`;

const Home: NextPage = () => {
  const {t} = useTranslation('common');
  return (
    <Wrap className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Test />
      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('h1')}
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </Wrap>
  );
};

export default Home;

export async function getServerSideProps({req, locale}: GetServerSidePropsContext) {
  const client = initializeApollo({headers: req?.headers});
  const translations = await serverSideTranslations(locale, ['common']);

  const data = await client.query({query: BRANDS_QUERY});
  return addApolloState(client, {
    props: {
      ...translations,
    },
  });
}
