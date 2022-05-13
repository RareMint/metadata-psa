const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const puppeteer = require("puppeteer");
const path = require("path");
const readXlsxFile = require("read-excel-file/node");
const _ = require("lodash");

const getFileList = () => {
  return new Promise((resolve) => {
    //joining path of directory
    const directoryPath = path.join(__dirname, "./");
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
        // console.log(file);
      });
      return resolve(
        files
          .filter((file) => file.includes("html"))
          .map((r) => r.split(".html").join(""))
          .sort()
      );
    });
  });
};

const getBrackettIds = () => {
  return new Promise((resolve) => {
    try {
      readXlsxFile("./input.xlsx").then((content) => {
        const [, ...data] = content;
        resolve(
          data
            .map((row) => row[1])
            .filter((record) => record)
            .map((r) => r.split(" ").join(""))
        );
      });
    } catch (error) {
      console.log({ error: error.message });
      resolve([]);
    }
  });
};

const writeToJsonBreckett = async (id, data) => {
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
    `./metadata/breckett/${id}.json`,
    JSON.stringify(metadata, null, 2)
  );
};

(async () => {
  const files = await getFileList();
  console.log("files", files);
  const ids = await getBrackettIds();
  console.log("ids", ids);
  const difference = _.difference(ids, files);
  console.log("difference", difference);

  console.log("Missing files", ids);
  for (let i = 0; i < ids.length; ++i) {
    try {
      const file = ids[i];
      const directoryPath = path.join(__dirname, file + ".html");
      const html = fs.readFileSync(directoryPath);
      const dom = new JSDOM(html);
      const content = dom.window.document.querySelector(
        "div.main_content_area"
      );
      const id = content.querySelector("h2")?.textContent?.split(":")[1];
      console.log("id", id);
      const table = dom.window.document.querySelector("table");
      const tds = Array.from(table.querySelectorAll("table tr"));
      const data = tds.map((td) =>
        td.textContent
          .trim()
          .split(":")
          .map((v) => v.trim())
      );
      console.log("data", data);
      await writeToJsonBreckett(id, data);
    } catch (error) {
      console.log("fatal error", error.message);
    }
  }
})();
