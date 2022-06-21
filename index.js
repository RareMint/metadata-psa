const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const { startCase, camelCase } = require("lodash");
const jsonexport = require("jsonexport");

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
    `./csv/psa/${id}.json`,
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
    `./csv/breckett/${id}.json`,
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
    `./csv/cgc/${id}.json`,
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
  console.log("values.attributes", values.attributes);
  const attributes = values.attributes;
  let valid = true;

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

  const player = attributes
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

  const PSA = "PSA";

  let grade = attributes
    .find((record) => record.trait_type === "Grade")
    .value?.split(" ");
  grade = grade[grade.length - 1];
  if (!grade) valid = false;

  const word_trade = getPsaWordGrade(String(grade));

  [year, brand, variety, card_number];

  const title =
    `${year} ${brand} ${variety} ${card_number} ${player} ${PSA} ${grade}`
      .split("-")
      .join(" ") +
    " " +
    word_trade;

  console.log("title:", title);
  return { title, card_id_number: card_number, certification_number };
};

const formatBreckett = (values) => {
  console.log("values.attributes", values.attributes);
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

  console.log("title:", title);
  return { title, card_id_number: "" };
};

const formatCGC = (values) => {
  console.log("values.attributes", values.attributes);
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

  const title =
    `${year} ${game} ${cardSet}${
      variant1 ? ` ${variant1} ` : ""
    }${cardName} ${cardNumber} CGC ${grade}`
      .split("-")
      .join(" ") +
    " " +
    word_trade;

  console.log("title:", title);
  return { title, card_id_number: "" };
};

(async () => {
  try {
    const psaFiles = await getPSAFiles();
    const psaCSVData = psaFiles.map((data) => {
      const { title, card_id_number, certification_number } = formatPSA(data);
      writeToJsonPSA(certification_number, title, data);
      return {
        card_id_number,
        title,
        certification_number,
      };
    });
    jsonexport(psaCSVData, function (err, csv) {
      if (err) return console.error(err);
      fs.writeFileSync(`./csv/psa/psa.csv`, csv);
    });

    const breckettFiles = await getBreckettFiles();
    const breckettCSVData = breckettFiles.map((data) => {
      const { title, card_id_number } = formatBreckett(data.data);
      writeToJsonBreckett(data.certification_number, title, data);
      return {
        card_id_number,
        title,
        certification_number: data.certification_number,
      };
    });
    jsonexport(breckettCSVData, function (err, csv) {
      if (err) return console.error(err);
      fs.writeFileSync(`./csv/breckett/breckett.csv`, csv);
    });

    const cgcFiles = await getCGCFiles();
    const cgcCSVData = cgcFiles.map((data) => {
      const { title, card_id_number } = formatCGC(data.data);
      writeToJsonCGC(data.certification_number, title, data);
      return {
        card_id_number,
        title,
        certification_number: data.certification_number,
      };
    });
    jsonexport(cgcCSVData, function (err, csv) {
      if (err) return console.error(err);
      fs.writeFileSync(`./csv/cgc/cgc.csv`, csv);
    });
  } catch (error) {
    console.log({ error: error });
  }
})();
