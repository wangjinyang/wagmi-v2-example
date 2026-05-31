import { http, webSocket, createConfig, fallback } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const { WC_PROJECT_ID } = publicRuntimeConfig;

const connectors =
  typeof window !== "undefined"
    ? [
        injected(),
        coinbaseWallet({ appName: "Create Wagmi" }),
        walletConnect({ projectId: WC_PROJECT_ID }),
      ]
    : [];

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors,
  ssr: true,
  transports: {
    // Using WebSocket for real-time event listening, with HTTP fallback
    [mainnet.id]: fallback([
      webSocket('wss://ethereum-rpc.publicnode.com'),
      http('https://ethereum-rpc.publicnode.com'),
    ]),
    [sepolia.id]: fallback([
      webSocket('wss://ethereum-sepolia-rpc.publicnode.com'),
      http('https://ethereum-sepolia-rpc.publicnode.com'),
    ]),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
