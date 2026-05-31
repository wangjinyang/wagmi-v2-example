import { useState } from "react";
import type { Hex } from "viem";
import { useWatchPendingTransactions } from "wagmi";

export function WatchPendingTransactions() {
  const [hashes, setHashes] = useState<Hex[]>([]);

  useWatchPendingTransactions({
    onTransactions: (hashes) => {
      console.log("Pending transactions received:", hashes);
      setHashes((x) => [...x, ...hashes]);
    },
    onError: (error) => {
      console.error("Watch pending transactions error:", error);
    },
  });

  return (
    <details>
      <summary>{hashes.length} hashes logged</summary>
      {hashes.reverse().join("\n")}
    </details>
  );
}
