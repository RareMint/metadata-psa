const fs = require("fs");
const path = require("path");

const { Pool } = require("pg");

const pool = new Pool({
  user: "raremint-dev",
  host: "34.171.133.30",
  database: "raremint-dev",
  password: process.env.DB_PASSWORD, //
  port: "5432",
  sslmode: false,
});

const hash =
  "0x8e6f46f1a888a2af0bc8c96816a1c58cc6277b1b6f7de5be5df088c0cc99091a";
pool.query(
  `SELECT * from revealed_metadata where token_hash = '${hash}'`,
  (err, res) => {
    console.log({ err });
    // check if the response is not 'undefined'
    if (res !== undefined) {
      // log the response to console
      console.log("Postgres response:", res.rows[0]);
    }
  }
);

pool.query(
  `SELECT table_name
FROM information_schema.tables
WHERE table_schema='public'
 AND table_type='BASE TABLE';`,
  (err, res) => {
    console.log({ err });
    // check if the response is not 'undefined'
    if (res !== undefined) {
      // log the response to console
      console.log("Postgres response:", res.rows);
    }
  }
);

const insertMetadata = (hash, metadata) => {
  const queryString = `INSERT INTO revealed_metadata(
        token_hash, revealed_metadata
        ) VALUES(
        '${hash}', '${JSON.stringify(metadata)}'
        )`;

  pool.query(queryString, (err, res) => {
    console.log({ res });
    if (err) console.log({ err });
  });
};

const getRevealedMetadata = async () => {
  return new Promise((resolve) => {
    const directoryPath = path.join(__dirname, "./final-pokemon-drop/revealed");
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        console.log("Unable to scan directory: " + err);
        return [];
      }
      const data = files.map(function (file) {
        const data = JSON.parse(
          fs.readFileSync(directoryPath + "/" + file, "utf8")
        );
        return { hash: file.replace(".json", ""), data };
      });
      return resolve(data);
    });
  });
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const metas = await getRevealedMetadata();
  for (let i = 0; i < metas.length; ++i) {
    const meta = metas[i];
    console.log(meta);
    insertMetadata(meta.hash, meta.data);
    await sleep(300);
  }
})();

module.exports = { insertMetadata };
