import { useEffect, useState } from "react";
import { recoverMessageAddress } from "viem";
import { useSignMessage } from "wagmi";

import { type Address } from "viem";

export function SignMessage() {
  const [recoveredAddress, setRecoveredAddress] = useState<Address>();
  const {
    data: signature,
    variables,
    error,
    status,
    signMessage,
  } = useSignMessage();

  useEffect(() => {
    (async () => {
      if (variables?.message && signature) {
        const recoveredAddress = await recoverMessageAddress({
          message: variables?.message,
          signature,
        });
        setRecoveredAddress(recoveredAddress);
      }
    })();
  }, [signature, variables?.message]);

  const isLoading = status === "pending";

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const element = event.target as HTMLFormElement;
          const formData = new FormData(element);
          const message = formData.get("message") as string;
          signMessage({ message });
        }}
      >
        <input name="message" type="text" defaultValue="Hello, world!" required />
        <button disabled={isLoading}>
          {isLoading ? "Check Wallet" : "Sign Message"}
        </button>
      </form>

      {signature && (
        <div>
          <div>signature {signature}</div>
          <div>recovered address {recoveredAddress}</div>
        </div>
      )}

      <div>{error && (error?.message ?? "Failed to sign message")}</div>
    </div>
  );
}
