import { stringify, parseEther } from "viem";
import {
  useSendTransaction,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi";

export function SendTransaction() {
  const { chain } = useAccount();
  const { data, isIdle, status, isError, sendTransaction } =
    useSendTransaction();
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransactionReceipt({ 
    hash: data,
    query: {
      enabled: !!data,
    },
  });

  const isLoading = status === "pending";

  if (isLoading) return <div>Check Wallet</div>;

  if (isIdle)
    return (
      <button
        disabled={isLoading}
        onClick={() =>
          sendTransaction({
            to: "0xad4353C20623De459458FEBEde9e6A321D53c8e6",
            value: parseEther("1"), // 1 ETH
          })
        }
      >
        Send Transaction
      </button>
    );

  return (
    <div>
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

      {isError && <div>Error sending transaction</div>}
    </div>
  );
}
