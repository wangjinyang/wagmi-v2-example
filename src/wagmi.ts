import { http, webSocket, createConfig, fallback } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

const connectors = typeof window !== "undefined" ? [injected()] : [];

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors,
  ssr: false,
  transports: {
    // Using WebSocket for real-time event listening, with HTTP fallback
    [mainnet.id]: fallback([
      webSocket("wss://ethereum-rpc.publicnode.com"),
      http("https://ethereum-rpc.publicnode.com"),
    ]),
    [sepolia.id]: fallback([
      webSocket("wss://ethereum-sepolia-rpc.publicnode.com"),
      http("https://ethereum-sepolia-rpc.publicnode.com"),
    ]),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
