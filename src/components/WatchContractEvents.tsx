import { useState } from "react";
import type { Log } from "viem";
import { stringify } from "viem";
import { useWatchContractEvent } from "wagmi";

import { usdcContractConfig, wagmiContractConfig } from "./contracts";

export function WatchContractEvents() {
  const [usdcLogs, setUsdcLogs] = useState<Log[]>([]);
  useWatchContractEvent({
    ...usdcContractConfig,
    eventName: "Transfer",
    onLogs: (logs) => {
      console.log('USDC Transfer event received:', logs);
      setUsdcLogs((x) => [...x, ...logs]);
    },
    onError: (error) => {
      console.error('USDC watch error:', error);
    },
  });

  const [wagmiLogs, setWagmiLogs] = useState<Log[]>([]);
  useWatchContractEvent({
    ...wagmiContractConfig,
    eventName: "Transfer",
    onLogs: (logs) => {
      console.log('Wagmi Transfer event received:', logs);
      setWagmiLogs((x) => [...x, ...logs]);
    },
    onError: (error) => {
      console.error('Wagmi watch error:', error);
    },
  });

  return (
    <div>
      <details>
        <summary>{usdcLogs.length} USDC `Transfer`s logged</summary>
        {usdcLogs
          .reverse()
          .map((log) => stringify(log))
          .join("\n\n\n\n")}
      </details>

      <details>
        <summary>{wagmiLogs.length} wagmi `Transfer`s logged</summary>
        {wagmiLogs
          .reverse()
          .map((log) => stringify(log))
          .join("\n\n\n\n")}
      </details>
    </div>
  );
}
