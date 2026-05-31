import { stringify, parseEther } from "viem";
import { normalize } from "viem/ens";
import {
  usePrepareTransactionRequest,
  useEnsResolver,
} from "wagmi";

export function SendTransactionPrepared() {
  const { data: toAddress } = useEnsResolver({
    name: normalize("moxey.eth"),
  });
  const { data, error, isError, isLoading } = usePrepareTransactionRequest({
    to: toAddress,
    value: parseEther("100", "wei"), 
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <pre>{error.message}</pre>}
    </div>
  );
}
