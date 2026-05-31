import { useSimulateContract } from "wagmi";
import { stringify } from "viem";

import { wagmiContractConfig } from "./contracts";

export function WriteContractPrepared() {
  const { data, error, isError, isLoading, isSuccess } = useSimulateContract({
    ...wagmiContractConfig,
    functionName: "mint",
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <pre>{error.message}</pre>}
      {isSuccess && (
        <div>
          <div>Simulation Success!</div>
          <div>
            <pre>{stringify(data, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
