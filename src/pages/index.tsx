import type { GetStaticProps } from "next";
import Head from "next/head";
import { WagmiApp } from "../components/WagmiApp";

type PageProps = {
  buildTime: string;
};

export const getStaticProps = (async () => {
  return {
    props: {
      buildTime: new Date().toISOString(),
    },
  };
}) satisfies GetStaticProps<PageProps>;

function Page({ buildTime }: PageProps) {
  return (
    <>
      <Head>
        <title>Wagmi v2 Example - Web3 DApp with Next.js</title>
      </Head>
      
      <WagmiApp />
    </>
  );
}

export default Page;
