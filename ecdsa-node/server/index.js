const express = require("express");
const app = express();
const cors = require("cors");
const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "049b06c4b1eff0b6fd7eff4c6ab28b3cf914127a15dd9ef89af8561c79499123249c5f365da8e6363d204bc50477d05fe2e6fc0be34a7f959ad725a794a7f5565b": 100,
  "04bd228502d7bf1816b968cb31bdc66cec1061c04fb9a83b2f20f15023a6fb754a41e716c5d8d23a3cda8d9ab47c5cebd0bc670ccf9c6ef27d4d7cce515b66b1ea": 50,
  "04b08efcfa5bfdec907d6ca82580b83a615e00b95571b1999b117d1013f3d6c7fae72eafae97b0dde67dda7134c0cd51ce869617abc79dc7f02aa4b923c7ae8b70": 75,
  "04b5e718b82199e048fb9fb2bd49870e5745f780c51a798586b0c8b14dddcb546bc3a4dd83a41291abeaa202a75eb826727572ee46e86370b4b4f211d6b75bd827": 100,
  "04d4d2d9a32b4fbe6a84da09cc66b7da8cd2787758913197b4627e22c6aaf125465c418d0f43bb1fc6e1c5dbdb7c86f09c434a05764ec3349046fbd07ffb607770": 500,
  "047efbca43d8cf2623cafb4a2f27e72e1ad1567857cefdaf0c6a002237a08327ded456455ebb9866728b0028ca6853c8f15f9230ad0db890a8dd6f32fdcf0abcb1": 20,
  "04f960fd842dd760d8a4540d206fbffd45338dbe02d1555ea754365a24b89fefaa49bee97adf473d179f467a426602bd39170cf4cabbca5e4e5ebd488ee8464a6b": 10,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || "0";
  res.send({ balance });
});

app.get("/privateKey/:address", (req, res) => {
  const { address } = req.params;
  const publicKey = secp.getPublicKey(address);
  const hexedPublicKey = toHex(publicKey);
  for (const key of Object.keys(balances)) {
    if (key === hexedPublicKey) {
      res.send({ controlledAddress: hexedPublicKey });
      return;
    }
  }
  res.send({ message: "Sign denied" });
});

// Yukarıdaki kodu test et

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
