const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");
const puppeteer = require("puppeteer");
const path = require("path");
const _ = require("lodash");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const getPokemonData = async (id) => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    // product: "firefox",
  });
  const page = await browser.newPage();

  let certificate = {};

  const url = `https://www.psacard.com/cert/${id}`;
  console.log("url", url);
  await page.goto(url, {
    waitUntil: "load",
    timeout: 10000,
  });
  const data = await page.evaluate(
    () => {
      const tds = Array.from(document.querySelectorAll("table tr"));
      return tds.map((td) => td.innerText.split("\t"));
    },
    { timeout: 30000 }
  );
  certificate["key"] = id;
  certificate["data"] = data;
  console.log("certificate", certificate);
  browser.close();
  return certificate;
};

const getPSAIds = () => {
  return new Promise((resolve) => {
    try {
      readXlsxFile("./input.xlsx").then((content) => {
        const [, ...data] = content;
        resolve(data.map((row) => row[0]));
      });
    } catch (error) {
      console.log({ error: error.message });
      resolve([]);
    }
  });
};

const writeToJsonPSA = async (id, data) => {
  const metadata = {
    description: "",
    attributes: data.map((row) => {
      return {
        trait_type: row[0],
        value: row[1],
      };
    }),
  };
  metadata.attributes.push({
    trait_type: "Edition",
    value: 1,
  });
  fs.writeFileSync(
    `./metadata/psa/${id}.json`,
    JSON.stringify(metadata, null, 2)
  );
};

const getFileList = () => {
  return new Promise((resolve) => {
    //joining path of directory
    const directoryPath = path.join(__dirname, "./metadata/psa");
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
        console.log("Unable to scan directory: " + err);
        return [];
      }
      //listing all files using forEach
      files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
      });
      return resolve(files);
    });
  });
};

(async () => {
  try {
    // const ids = await getPSAIds();
    // const psaIds = [ids[0], ids[1], ids[2], ids[3]];
    const psaIds = await getPSAIds();
    const jsonFiles = await getFileList();
    const files = jsonFiles.map((f) => f.split(".")[0]);
    // console.log("files", files);
    // console.log("psaIds", psaIds);
    const ids = _.difference(psaIds, files);
    let i = 0;
    console.log("Missing files", ids);
    while (i < ids.length) {
      try {
        const id = ids[i];
        const { key, data } = await getPokemonData(id);
        if (data.length < 1) {
          throw new Error("No data :(");
        }
        console.log("writing", id);
        await writeToJsonPSA(key, data);
        ++i;
        const wait = Math.random() * 2000 + Math.random() * 2000 + 1000 * 60;
        console.log("waiting", wait);
        await sleep(wait);
      } catch (error) {
        const sleeping = Math.random() * 1000 * 60 + 1000 * 60 * 7;
        console.log("sleeping", sleeping);
        console.log("fatal error", error.message);
        await sleep(sleeping);
      }
    }
  } catch (error) {
    console.log({ error: error.message });
  }
})();
