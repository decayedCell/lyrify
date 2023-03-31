import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';

import Button from '@mui/material/Button';

function About() {
  const localize = useTranslation().t;

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div>About</div>
      <p>{localize('General.Welcome')}</p>
      <h2>
        <Link className="text-blue-500 underline" href="/">
          Back to home
        </Link>
      </h2>
      <div>
        <Button variant="contained">Test MaterialUI</Button>
      </div>
      <Image
        src="/images/godspeed.jpg"
        height={300}
        width={300}
        alt="godspeed"
      />
    </>
  );
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default About;
