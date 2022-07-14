const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const { startCase, camelCase } = require("lodash");
const jsonexport = require("jsonexport");
const crypto = require("crypto");
const { generateProof, contract_address } = require("./etherjs");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const getPSAFiles = () => {
  return new Promise((resolve) => {
    const directoryPath = path.join(__dirname, "./metadata/psa");
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        console.log("Unable to scan directory: " + err);
        return [];
      }
      const data = files.map(function (file) {
        const data = JSON.parse(
          fs.readFileSync(directoryPath + "/" + file, "utf8")
        );
        return data;
      });
      return resolve(data);
    });
  });
};

const writeToJsonPSA = async (id, title, data) => {
  delete data.description;
  delete data.certification_number;
  fs.writeFileSync(
    `./final-pokemon-drop/json/psa/${id}.json`,
    JSON.stringify(
      {
        ...data,
        title,
      },
      null,
      2
    )
  );
};

const writeToJsonBreckett = async (id, title, data) => {
  delete data.data.description;
  delete data.data.certification_number;
  fs.writeFileSync(
    `./final-pokemon-drop/json/breckett/${id}.json`,
    JSON.stringify(
      {
        ...data.data,
        title,
      },
      null,
      2
    )
  );
};

const writeToJsonCGC = async (id, title, data) => {
  delete data.data.description;
  fs.writeFileSync(
    `./final-pokemon-drop/json/cgc/${id}.json`,
    JSON.stringify(
      {
        ...data.data,
        title,
      },
      null,
      2
    )
  );
};

const writeUnrevealedMetadaToJson = async (proof, data) => {
  fs.writeFileSync(
    `./final-pokemon-drop/unrevealed/${proof}.json`,
    JSON.stringify(
      {
        ...data,
      },
      null,
      2
    )
  );
};

const writeProofJson = async (data) => {
  fs.writeFileSync(
    `./final-pokemon-drop/proof.json`,
    JSON.stringify(
      {
        ...data,
      },
      null,
      2
    )
  );
};

const writeRevealedMetadaToJson = async (proof, data) => {
  fs.writeFileSync(
    `./final-pokemon-drop/revealed/${proof}.json`,
    JSON.stringify(
      {
        ...data,
      },
      null,
      2
    )
  );
};

const getBreckettFiles = () => {
  return new Promise((resolve) => {
    const directoryPath = path.join(__dirname, "./metadata/breckett");
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        console.log("Unable to scan directory: " + err);
        return [];
      }
      const data = files.map(function (file) {
        const data = JSON.parse(
          fs.readFileSync(directoryPath + "/" + file, "utf8")
        );
        return {
          data,
          certification_number: file.replace(".json", ""),
        };
      });
      return resolve(data);
    });
  });
};

const getCGCFiles = () => {
  return new Promise((resolve) => {
    const directoryPath = path.join(__dirname, "./metadata/CGC");
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        console.log("Unable to scan directory: " + err);
        return [];
      }
      const data = files.map(function (file) {
        const data = JSON.parse(
          fs.readFileSync(directoryPath + "/" + file, "utf8")
        );
        return {
          data,
          certification_number: file.replace(".json", ""),
        };
      });
      return resolve(data);
    });
  });
};

const getPsaWordGrade = (grade) => {
  switch (grade) {
    case "10": {
      return "Gem Mint";
    }
    case "9": {
      return "Mint";
    }
    case "8.5": {
      return "NM-MT+";
    }
    case "8": {
      return "NM-MT";
    }
    case "7.5": {
      return "NM+";
    }
    case "7": {
      return "NM";
    }
    case "6.5": {
      return "EXMT+";
    }
    case "6": {
      return "EXMT";
    }
    case "5.5": {
      return "EX+";
    }
    case "5": {
      return "EX";
    }
    case "4.5": {
      return "VG-EX+";
    }
    case "4": {
      return "VG-EX";
    }
    case "3.5": {
      return "VG+";
    }
    case "3": {
      return "VG";
    }
    case "2.5": {
      return "GD+";
    }
    case "2": {
      return "GD";
    }
    case "1.5": {
      return "FR";
    }
    case "1": {
      return "PR";
    }
    default: {
      throw new Error("Invalid code");
    }
  }
};

const getBreckettWordGrade = (grade) => {
  switch (grade) {
    case "10.0":
    case "10": {
      return "Pristine";
    }
    case "9.5": {
      return "Gem Mint";
    }
    case "9.0":
    case "9": {
      return "Mint";
    }
    case "8.5": {
      return "NM-MT+";
    }
    case "8.0":
    case "8": {
      return "NM-MT";
    }
    case "7.5": {
      return "NM+";
    }
    case "7.0":
    case "7": {
      return "NM";
    }
    case "6.5": {
      return "EXMT+";
    }
    case "6.0":
    case "6": {
      return "EXMT";
    }
    case "5.5": {
      return "EX+";
    }
    case "5.0":
    case "5": {
      return "EX";
    }
    case "4.5": {
      return "VG-EX+";
    }
    case "4.0":
    case "4": {
      return "VG-EX";
    }
    case "3.5": {
      return "VG+";
    }
    case "3.0":
    case "3": {
      return "VG";
    }
    case "2.5": {
      return "GD+";
    }
    case "2.0":
    case "2": {
      return "GD";
    }
    case "1.5": {
      return "FR";
    }
    case "1.0":
    case "1": {
      return "PR";
    }
    default: {
      throw new Error("Invalid code");
    }
  }
};

const getCGCWordGrade = (grade) => {
  switch (grade) {
    case "10.0":
    case "10": {
      return "Pristine";
    }
    case "9.5": {
      return "Gem Mint";
    }
    case "9.0":
    case "9": {
      return "Mint";
    }
    case "8.5": {
      return "NM-MT+";
    }
    case "8.0":
    case "8": {
      return "NM-MT";
    }
    case "7.5": {
      return "NM+";
    }
    case "7.0":
    case "7": {
      return "NM";
    }
    case "6.5": {
      return "EXMT+";
    }
    case "6.0":
    case "6": {
      return "EXMT";
    }
    case "5.5": {
      return "EX+";
    }
    case "5.0":
    case "5": {
      return "EX";
    }
    case "4.5": {
      return "VG-EX+";
    }
    case "4.0":
    case "4": {
      return "VG-EX";
    }
    case "3.5": {
      return "VG+";
    }
    case "3.0":
    case "3": {
      return "VG";
    }
    case "2.5": {
      return "GD+";
    }
    case "2.0":
    case "2": {
      return "GD";
    }
    case "1.5": {
      return "FR";
    }
    case "1.0":
    case "1": {
      return "PR";
    }
    default: {
      throw new Error("Invalid code");
    }
  }
};

const fixCase = (value) =>
  value
    ?.split("-")
    .join(" ")
    .split(" ")
    .map((word) => {
      if (word === "NO") return "No";
      if (word === "HOLO") return "Holo";
      if (word.length < 3) return word;
      if (word === "AND") return "and";
      return startCase(camelCase(word));
    })
    .join(" ");

const formatPSA = (values) => {
  // console.log("values.attributes", values.attributes);
  const attributes = values.attributes;

  const certification_number = attributes.find(
    (record) => record.trait_type === "Certification Number"
  ).value;
  if (!certification_number) valid = false;

  const year = attributes.find((record) => record.trait_type === "Year").value;
  if (!year) valid = false;

  const brand = fixCase(
    attributes.find((record) => record.trait_type === "Brand").value
  );
  if (!brand) valid = false;

  const variety = fixCase(
    attributes.find((record) => record.trait_type === "Variety/Pedigree").value
  );
  if (!variety) valid = false;

  const card_number = attributes.find(
    (record) => record.trait_type === "Card Number"
  ).value;
  if (!card_number) valid = false;

  let player = attributes
    .find((record) => record.trait_type === "Player")
    .value.split("-")
    .join(" ")
    .split("/")
    .map((v) => {
      if (v.length < 3) return v;
      return v
        .split(" ")
        .map((v) => {
          if (v === "HOLO") return "Holo";
          if (v === "VSTAR") return "VStar";
          if (v === "NO") return "No";
          if (v.length < 3) return v;
          return _.capitalize(v);
        })
        .join(" ");
    })
    .join("/");

  if (!player) valid = false;

  let grade = attributes
    .find((record) => record.trait_type === "Grade")
    .value?.split(" ");
  grade = grade[grade.length - 1];
  if (!grade) valid = false;

  const word_trade = getPsaWordGrade(String(grade));

  // Special cases

  let tempBrand = brand.split("-").join(" ").split(" ");
  let tempVariety = variety.split("-").join(" ").split(" ");
  let brandVariety = _.uniq([...tempBrand, ...tempVariety]).join(" ");
  // console.log({ brandVariety });
  //

  // let title = [year, brand, variety, card_number, player, "PSA", grade]
  //   .map((w) => w.trim())
  //   .split("-")
  //   .join(" ");

  let title = [year, brandVariety, card_number, player, "PSA", grade].map((w) =>
    w.trim().replace("-", " ")
  );

  title.push(word_trade);
  title = title
    .join(" ")
    .split(" ")
    .filter((w) => w)
    .join(" ");
  // if (certification_number === "52986812") {
  //   console.log(title);
  //   console.log({
  //     year,
  //     brand,
  //     variety,
  //     card_number,
  //     player,
  //     grade,
  //     word_trade,
  //   });
  // }
  title = title.replace(" OF ", " Of ");
  title = title.replace(".foil", ".Foil");
  // const title =
  //   `${year} ${brand} ${variety} ${card_number} ${player} PSA ${grade}`
  //     .split("-")
  //     .join(" ") +
  //   " " +
  //   word_trade;

  // const title1 = `${year} ${brand} ${variety} PSA ${grade}`
  //   .split("-")
  //   .join(" ");

  // const title2 = `${year} ${brand} PSA ${grade}`.split("-").join(" ");

  // const title3 = `${year} ${variety} PSA ${grade}`.split("-").join(" ");

  // player = player.split("-").join(" ");

  // console.log("title:", title1);
  // console.log("title:", title2);
  // console.log("title:", title3);
  return {
    title,
    certification_number,
    player,
  };
};

const formatBreckett = (values) => {
  // console.log("values.attributes", values.attributes);
  const attributes = values.attributes;
  let valid = true;

  const setName = fixCase(
    attributes.find((record) => record.trait_type === "Set Name").value
  );
  if (!setName) valid = false;

  const playerName = attributes
    .find((record) => record.trait_type === "Player Name")
    .value.split("-")
    .join(" ")
    .split("/")
    .map((v) => {
      if (v.length < 3) return v;
      return v
        .split(" ")
        .map((v) => {
          if (v === "HOLO") return "Holo";
          if (v === "VSTAR") return "VStar";
          if (v === "NO") return "No";
          if (v.length < 3) return v;
          return _.capitalize(v);
        })
        .join(" ");
    })
    .join("/");
  if (!playerName) valid = false;

  const finalGrade = attributes.find(
    (record) => record.trait_type === "Final Grade"
  ).value;
  if (!finalGrade) valid = false;

  const word_trade = getBreckettWordGrade(String(finalGrade));

  const title =
    `${setName} ${playerName} BGS ${finalGrade}`.split("-").join(" ") +
    " " +
    word_trade;

  // const title = `${playerName} ${setName} BGS ${finalGrade}`
  //   .split("-")
  //   .join(" ");

  // console.log("title:", title);
  return { title, card_id_number: "" };
};

const formatCGC = (values) => {
  // console.log("values.attributes", values.attributes);
  const attributes = values.attributes;

  const year = attributes.find((record) => record.trait_type === "Year").value;

  const game = fixCase(
    attributes.find((record) => record.trait_type === "Game").value
  );

  const cardSet = fixCase(
    attributes.find((record) => record.trait_type === "Card Set").value
  );

  const variant1 = fixCase(
    attributes.find((record) => record.trait_type === "Variant 1")?.value
  );

  const cardName = fixCase(
    attributes.find((record) => record.trait_type === "Card Name").value
  );

  const cardNumber = attributes.find(
    (record) => record.trait_type === "Card Number"
  ).value;

  const grade = attributes.find(
    (record) => record.trait_type === "Grade"
  ).value;

  // const pedigree = fixCase(
  //   attributes.find((record) => record.trait_type === "Pedigree").value
  // );

  const word_trade = getCGCWordGrade(String(grade));

  let title = [
    year,
    game,
    cardSet,
    variant1,
    cardName,
    cardNumber,
    "CGC",
    grade,
    word_trade,
  ]
    .filter((w) => w)
    .map((w) => w.trim())
    .join(" ");

  // const title =
  //   `${year} ${game} ${cardSet}${
  //     variant1 ? ` ${variant1} ` : ""
  //   }${cardName} ${cardNumber} CGC ${grade}`
  //     .split("-")
  //     .join(" ") +
  //   " " +
  //   word_trade;

  // const title = `${
  //   variant1 ? `${variant1} ` : ""
  // }${cardName} ${year} ${game} ${cardSet} CGC ${grade}`
  //   .split("-")
  //   .join(" ");

  // console.log("title:", title);
  return { title, card_id_number: "" };
};

const callProofOfIntegrity = async ({ title, salt }) => {
  return generateProof({ title, salt });
  // return "0x80850944170bD73D0908A57BE7AD1A2c32c78ab1";
};

const getMaskedProof = (proof) => {
  const size = proof.length;
  const start = proof.slice(0, 6);
  const end = proof.slice(size - 4);
  return start + "..." + end;
};

const getUnrevealedMetadata = ({ proof, masked_proof }) => {
  return {
    animation_url:
      "https://media.raremint.com/pokemon_genesis_unrevealed/pokemon-genesis-pack-unrevealed.mp4",
    name: "Pokemon Genesis Mystery Pack " + `(${masked_proof})`,
    revealed: false,
    image:
      "https://media.raremint.com/pokemon_genesis_unrevealed/pokemon-genesis-pack-unrevealed.jpg",
    drop: {
      name: "Pokemon Genesis Mystery Pack",
      id: "001",
    },
    attributes: [
      {
        value: "Unrevealed",
      },
    ],
    proof_of_integrity: proof,
    description: `RareMint Pokemon Card NFT Mystery Pack. Cards are graded by PSA, BGS, or CGC. The NFT can be redeemed anytime for the physical asset stored in our secure and insured vault. The 1 of 1 NFT contained in this sealed pack is backed by the physical asset in the RareMint Vault. The card was randomly assigned at mint time, along with a unique identifier (${proof}) derived from a fingerprint of the physical asset, which will be revealed at the same time as the NFT itself.`,
  };
};

const parseAtribbutes = (attributes) => {
  const newAtrtibutes = [];
  const player = attributes.find(
    (attr) =>
      attr && (attr.trait_type === "Player" || attr.trait_type === "Card Name")
  );
  const grade = attributes.find(
    (attr) =>
      attr && (attr.trait_type === "Grade" || attr.trait_type === "Final Grade")
  );
  const certification_number = attributes.find(
    (attr) => attr && attr.trait_type === "Certification Number"
  );
  if (player) {
    newAtrtibutes.push({
      trait_type: "Subject",
      value: player.value,
    });
  }
  if (grade) {
    newAtrtibutes.push(grade);
  }
  if (certification_number) {
    newAtrtibutes.push({
      trait_type: "Authentication Type",
      value: certification_number.value,
    });
  }
  return newAtrtibutes;
};

const getRevealedMetadata = ({
  title,
  salt,
  proof,
  masked_proof,
  certification_number,
  attributes,
  authenticator,
}) => {
  return {
    animation_url: `https://media.raremint.com/pokemon_genesis/${certification_number.trim()}.mp4`,
    name: title + " " + `(${masked_proof})`,
    revealed: true,
    image: `https://media.raremint.com/pokemon_genesis/${certification_number.trim()}.jpg`,
    drop: {
      name: "Pokemon Genesis Mystery Pack",
      id: "0001",
    },
    attributes: [
      {
        value: "Revealed",
      },
      {
        trait_type: "Tier",
        value: "Ultra Rare",
      },
      {
        display_type: "number",
        trait_type: "Edition",
        max_value: 1,
        value: 1,
      },
      {
        display_type: "date",
        trait_type: "Digital Asset Creation Date",
        value: new Date().getTime(),
      },
      {
        trait_type: "Asset Backed",
        value: "Yes",
      },
      {
        trait_type: "Category",
        value: "TCG",
      },
      {
        trait_type: "Team",
        value: "Pokemon",
      },
      {
        trait_type: "Type",
        value: "Card",
      },
      {
        trait_type: "Authenticator",
        value: authenticator,
      },
      ...parseAtribbutes(attributes),
    ],
    proof_of_integrity: {
      proof_contract: contract_address,
      hex_proof: proof,
      salt,
      fingerprint: title,
    },
    description: `RareMint Pokemon Card NFT Mystery Pack. Cards are graded by PSA, BGS, or CGC. The NFT can be redeemed anytime for the physical asset stored in our secure and insured vault. The 1 of 1 NFT contained in this sealed pack is backed by the physical asset in the RareMint Vault. The card was randomly assigned at mint time, along with a unique identifier (${proof}) derived from a fingerprint of the physical asset, which will be revealed at the same time as the NFT itself.`,
  };
};

(async () => {
  try {
    const smartcontract_proofs = [];
    const exclude = [
      "52987415",
      "63150425",
      "63150431",
      "63150444",
      "63150448",
    ];
    let psaFiles = await getPSAFiles();
    psaFiles = psaFiles.filter((data) => {
      if (
        data.attributes.find(
          (attr) =>
            attr["trait_type"] === "Certification Number" &&
            !_.includes(exclude, attr["value"])
        )
      ) {
        return true;
      }
      // console.log(data);
      return false;
    });
    const psaCSVData = psaFiles.map((data) => {
      const { title, certification_number } = formatPSA(data);
      writeToJsonPSA(certification_number, title, data);
      return {
        certification_number,
        title,
        attributes: data.attributes,
      };
    });
    let salts = [];
    let contract_salts = [];

    contract_salts = psaCSVData.map((data) => {
      const salt = crypto.randomInt(100000000000, 999999999999);
      salts.push(salt);
      return {
        salt: salt,
        size: String(salt).length,
        title: data.title,
        attributes: data.attributes,
        certification_number: data.certification_number,
      };
    });
    console.log("input", salts.length, "salts", _.uniq(salts).length);
    for (let i = 0; i < contract_salts.length; ++i) {
      const salt = contract_salts[i].salt;
      const title = contract_salts[i].title;
      const attributes = contract_salts[i].attributes;
      const certification_number = contract_salts[i].certification_number;
      const smartcontract_proof = await callProofOfIntegrity({ salt, title });
      smartcontract_proofs.push(smartcontract_proof);
      const masked_smartcontract_proof = getMaskedProof(smartcontract_proof);
      console.dir({
        salt,
        title,
        smartcontract_proof,
        masked_smartcontract_proof,
      });
      const unrevealed_metadata = getUnrevealedMetadata({
        proof: smartcontract_proof,
        masked_proof: masked_smartcontract_proof,
        certification_number,
      });
      const revealed_metadata = getRevealedMetadata({
        title,
        salt,
        proof: smartcontract_proof,
        masked_proof: masked_smartcontract_proof,
        attributes,
        authenticator: "PSA",
        certification_number,
      });
      await writeUnrevealedMetadaToJson(
        smartcontract_proof,
        unrevealed_metadata
      );
      await writeRevealedMetadaToJson(smartcontract_proof, revealed_metadata);
      await sleep(1000 + crypto.randomInt(1000, 2000));
    }
    jsonexport(psaCSVData, function (err, csv) {
      if (err) return console.error(err);
      fs.writeFileSync(`./final-pokemon-drop/csv/psa/psa.csv`, csv);
    });

    const breckettFiles = await getBreckettFiles();
    const breckettCSVData = breckettFiles.map((data) => {
      const { title } = formatBreckett(data.data);
      writeToJsonBreckett(data.certification_number, title, data);
      return {
        certification_number: data.certification_number,
        title,
        attributes: data.data.attributes,
      };
    });
    salts = [];

    contract_salts = breckettCSVData.map((data) => {
      const salt = crypto.randomInt(100000000000, 999999999999);
      salts.push(salt);
      console.log({ data });
      return {
        salt: salt,
        size: String(salt).length,
        title: data.title,
        attributes: data.attributes,
        certification_number: data.certification_number,
      };
    });
    console.log("input", salts.length, "salts", _.uniq(salts).length);
    for (let i = 0; i < contract_salts.length; ++i) {
      const salt = contract_salts[i].salt;
      const title = contract_salts[i].title;
      const attributes = contract_salts[i].attributes;
      const certification_number = contract_salts[i].certification_number;
      const smartcontract_proof = await callProofOfIntegrity({ salt, title });
      smartcontract_proofs.push(smartcontract_proof);
      const masked_smartcontract_proof = getMaskedProof(smartcontract_proof);
      console.dir({
        salt,
        title,
        smartcontract_proof,
        masked_smartcontract_proof,
      });
      const unrevealed_metadata = getUnrevealedMetadata({
        proof: smartcontract_proof,
        masked_proof: masked_smartcontract_proof,
        certification_number,
      });
      const revealed_metadata = getRevealedMetadata({
        title,
        salt,
        proof: smartcontract_proof,
        masked_proof: masked_smartcontract_proof,
        attributes,
        authenticator: "BGS",
        certification_number,
      });
      await writeUnrevealedMetadaToJson(
        smartcontract_proof,
        unrevealed_metadata
      );
      await writeRevealedMetadaToJson(smartcontract_proof, revealed_metadata);
      await sleep(1000 + crypto.randomInt(1000, 2000));
    }

    jsonexport(breckettCSVData, function (err, csv) {
      if (err) return console.error(err);
      fs.writeFileSync(`./final-pokemon-drop/csv/breckett/breckett.csv`, csv);
    });

    const cgcFiles = await getCGCFiles();
    const cgcCSVData = cgcFiles.map((data) => {
      const { title } = formatCGC(data.data);
      writeToJsonCGC(data.certification_number, title, data);
      return {
        certification_number: data.certification_number,
        title,
        attributes: data.data.attributes,
      };
    });

    contract_salts = cgcCSVData.map((data) => {
      const salt = crypto.randomInt(100000000000, 999999999999);
      salts.push(salt);
      console.log({ data });
      return {
        salt: salt,
        size: String(salt).length,
        title: data.title,
        attributes: data.attributes,
        certification_number: data.certification_number,
      };
    });
    console.log("input", salts.length, "salts", _.uniq(salts).length);
    for (let i = 0; i < contract_salts.length; ++i) {
      const salt = contract_salts[i].salt;
      const title = contract_salts[i].title;
      const attributes = contract_salts[i].attributes;
      const certification_number = contract_salts[i].certification_number;
      const smartcontract_proof = await callProofOfIntegrity({ salt, title });
      smartcontract_proofs.push(smartcontract_proof);
      const masked_smartcontract_proof = getMaskedProof(smartcontract_proof);
      console.dir({
        salt,
        title,
        smartcontract_proof,
        masked_smartcontract_proof,
      });
      const unrevealed_metadata = getUnrevealedMetadata({
        proof: smartcontract_proof,
        masked_proof: masked_smartcontract_proof,
        certification_number,
      });
      const revealed_metadata = getRevealedMetadata({
        title,
        salt,
        proof: smartcontract_proof,
        masked_proof: masked_smartcontract_proof,
        attributes,
        authenticator: "CGC",
        certification_number,
      });
      await writeUnrevealedMetadaToJson(
        smartcontract_proof,
        unrevealed_metadata
      );
      await writeRevealedMetadaToJson(smartcontract_proof, revealed_metadata);
      await sleep(1000 + crypto.randomInt(1000, 2000));
    }

    jsonexport(cgcCSVData, function (err, csv) {
      if (err) return console.error(err);
      fs.writeFileSync(`./final-pokemon-drop/csv/cgc/cgc.csv`, csv);
    });

    await writeProofJson({
      size: smartcontract_proofs.length,
      smartcontract_proofs,
    });
  } catch (error) {
    console.log({ error: error });
  }
})();
