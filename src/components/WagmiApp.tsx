import { useAccount } from "wagmi";

import { Connect } from "./Connect";
import { Account } from "./Account";
import { Balance } from "./Balance";
import { BlockNumber } from "./BlockNumber";
import { NetworkSwitcher } from "./NetworkSwitcher";
import { ReadContract } from "./ReadContract";
import { ReadContracts } from "./ReadContracts";
import { ReadContractsInfinite } from "./ReadContractsInfinite";
import { SendTransaction } from "./SendTransaction";
import { SendTransactionPrepared } from "./SendTransactionPrepared";
import { SignMessage } from "./SignMessage";
import { SignTypedData } from "./SignTypedData";
import { WatchContractEvents } from "./WatchContractEvents";
import { WatchPendingTransactions } from "./WatchPendingTransactions";
import { WriteContract } from "./WriteContract";
import { WriteContractPrepared } from "./WriteContractPrepared";

export function WagmiApp() {
  const { isConnected } = useAccount();
  
  return (
    <>
      <Connect />

      {isConnected && (
        <>
          <hr />
          <h2>Network</h2>
          <NetworkSwitcher />
          <br />
          <hr />
          <h2>Account</h2>
          <Account />
          <br />
          <hr />
          <h2>Balance</h2>
          <Balance />
          <br />
          <hr />
          <h2>Block Number</h2>
          <BlockNumber />
          <br />
          <hr />
          <h2>Read Contract</h2>
          <ReadContract />
          <br />
          <hr />
          <h2>Read Contracts</h2>
          <ReadContracts />
          <br />
          <hr />
          <h2>Read Contracts Infinite</h2>
          <ReadContractsInfinite />
          <br />
          <hr />
          <h2>Send Transaction</h2>
          <SendTransaction />
          <br />
          <hr />
          <h2>Send Transaction (Prepared)</h2>
          <SendTransactionPrepared />
          <br />
          <hr />
          <h2>Sign Message</h2>
          <SignMessage />
          <br />
          <hr />
          <h2>Sign Typed Data</h2>
          <SignTypedData />
          <br />
          <hr />
          <h2>Watch Contract Events</h2>
          <WatchContractEvents />
          <br />
          <hr />
          <h2>Watch Pending Transactions</h2>
          <WatchPendingTransactions />
          <br />
          <hr />
          <h2>Write Contract</h2>
          <WriteContract />
          <br />
          <hr />
          <h2>Write Contract (Prepared)</h2>
          <WriteContractPrepared />
        </>
      )}
    </>
  );
}
