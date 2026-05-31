import { useState } from "react";
import { useAccount, useBalance } from "wagmi";

import { formatUnits, type Address } from "viem";

export function Balance() {
  return (
    <div>
      <div>
        <AccountBalance />
      </div>
      <br />
      <div>
        <FindBalance />
      </div>
    </div>
  );
}

export function AccountBalance() {
  const { address } = useAccount();
  const { data, refetch } = useBalance({
    address,
  });

  return (
    <div>
      {`${data?.value ? formatUnits(data.value, data.decimals) : ""} ${data?.symbol} `}
      <button onClick={() => refetch()}>refetch</button>
    </div>
  );
}

export function FindBalance() {
  const [address, setAddress] = useState("");
  const { data, isLoading, refetch } = useBalance({
    address: address as Address,
  });

  const [value, setValue] = useState("");

  return (
    <div>
      Find balance:{" "}
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="wallet address"
        value={value}
      />
      <button
        onClick={() => (value === address ? refetch() : setAddress(value))}
      >
        {isLoading ? "fetching..." : "fetch"}
      </button>
      <div>
        {`${data?.value ? formatUnits(data.value, data.decimals) : ""} ${data?.symbol} `}
      </div>
    </div>
  );
}
