import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A comprehensive example of wagmi v2 with Next.js, featuring wallet connection, contract interactions, and real-time event watching."
        />
        <meta
          name="keywords"
          content="wagmi, web3, ethereum, nextjs, blockchain, dapp, wallet, smart contract, viem, react, web3 wallet, ethereum wallet, metamask"
        />
        <meta name="author" content="Wagmi v2 Example" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Wagmi v2 Example - Web3 DApp with Next.js"
        />
        <meta
          property="og:description"
          content="A comprehensive example of wagmi v2 with Next.js, featuring wallet connection and smart contract interactions."
        />
        <meta property="og:site_name" content="Wagmi v2 Example" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wagmi v2 Example - Web3 DApp" />
        <meta
          name="twitter:description"
          content="A comprehensive example of wagmi v2 with Next.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
