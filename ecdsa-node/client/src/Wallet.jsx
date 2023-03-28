import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";

function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  privateKey,
  setPrivateKey,
}) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    const address = await secp.getPublicKey(privateKey);
    const hexedAddress = toHex(address);
    setAddress(hexedAddress);
    if (hexedAddress) {
      const {
        data: { balance },
      } = await server.get(`balance/${hexedAddress}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input
          placeholder="Type Private Key"
          value={privateKey}
          onChange={onChange}
        ></input>
      </label>

      <div className="balance">Balance: {balance}</div>

      <div>
        Address: <span>{address.slice(0, 35)}...</span>
      </div>
    </div>
  );
}

export default Wallet;
