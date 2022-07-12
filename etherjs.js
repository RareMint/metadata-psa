const ethers = require("ethers");
const abi = require("./RMC_PROOF_OF_INTEGRITY_ABI.json");
const rpc_url = process.env.RPC_URL;
const provider = new ethers.providers.JsonRpcProvider(rpc_url);
const contract_address = process.env.CONTRACT;

console.log({
  rpc_url,
  contract_address,
});

const contract = new ethers.Contract(contract_address, abi, provider);

const generateProof = async ({ title, salt }) => {
  const privateKey = process.env.PV_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);
  const contractWithSigner = contract.connect(wallet);
  const hex_asset_proof = await contractWithSigner.generateProof(title, salt);
  return hex_asset_proof;
};

module.exports = { generateProof, contract_address };

// (async function () {
//   const hex_asset_proof = await generateProof(
//     "1999 Pokemon Game 1st Edition 4 Charizard Holo PSA 9 Mint",
//     917813350973
//   );
//   // const rc = await tx.wait();
//   console.log({ hex_asset_proof });
// })();
