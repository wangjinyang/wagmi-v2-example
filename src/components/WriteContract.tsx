import { useState } from "react";
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from "wagmi";

import { wagmiContractConfig } from "./contracts";
import { stringify } from "viem";

export function WriteContract() {
  const [tokenId, setTokenId] = useState<string>("");
  const { chain } = useAccount();

  const { data, error, isPending, isError, writeContract } = useWriteContract();
  const {
    data: receipt,
    isLoading,
    isSuccess,
  } = useWaitForTransactionReceipt({ hash: data });

  return (
    <div>
      <div>Mint a wagmi:</div>
      <div>
        <input
          onChange={(e) => setTokenId(e.target.value)}
          placeholder="token id (e.g., 999999...)"
          value={tokenId}
        />
        <button
          disabled={isPending}
          onClick={() =>
            writeContract({
              ...wagmiContractConfig,
              functionName: "mint",
              args: [BigInt(tokenId)],
            })
          }
        >
          Mint
        </button>
      </div>
      {isPending && <div>Pending...</div>}
      {isSuccess && (
        <>
          <a
            target="__blank"
            href={`${chain?.blockExplorers?.default?.url}/tx/${data}`}
          >
            Transaction Hash: {data}
          </a>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{error?.message}</div>}
    </div>
  );
}
