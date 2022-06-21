const fs = require('fs');
const prompt = require('prompt-sync')();
​
const description = prompt('Please enter the description: ');
const external_url = 'https://raremint.com';
const image = prompt('Please enter the IPFS Hash of the visual asset: ');
const name = prompt('Please enter the name of the asset: ');
const tier = prompt(
  'Please enter tier type(i.e. Ultra Rare/Limited Edition): '
);
const maxQuantity = parseInt(prompt('Please enter max edition value: '));
let quantity = parseInt(prompt('Please enter edition value: '));
const backed = prompt('Is this NFT asset backed?: ');
const category = prompt('What is the NFT category?: ');
const subject = prompt('Please enter the subject: ');
const team = prompt('Please enter the team: ');
const typeMeta = prompt('Please enter the type: ');
const authenticator = prompt('Please enter the authenticator: ');
const grade = prompt('Please enter the grade: ');
const authType = prompt('Please enter the authentication type: ');
​
let Metadata = {
  description,
  external_url,
  image: `ipfs://${image}`,
  name,
  attributes: [
    {
      trait_type: 'Tier',
      value: tier,
    },
    {
      display_type: 'number',
      trait_type: 'Edition',
      max_value: maxQuantity,
      value: quantity,
    },
    {
      display_type: 'date',
      trait_type: 'Digital Asset Creation Date',
      value: Date.now(),
    },
    {
      trait_type: 'Asset Backed',
      value: backed,
    },
    {
      trait_type: 'Category',
      value: category,
    },
    {
      trait_type: 'Subject',
      value: subject,
    },
    {
      trait_type: 'Team',
      value: team,
    },
    {
      trait_type: 'Type',
      value: typeMeta,
    },
    {
      trait_type: 'Authenticator',
      value: authenticator,
    },
    {
      trait_type: 'Grade',
      value: grade,
    },
    {
      trait_type: 'Authentication Type',
      value: authType,
    },
  ],
};
​
const subjectStrip = subject.replace(/\s+/g, '');
const tierStrip = tier.replace(/\s+/g, '');
​
if (maxQuantity > 1) {
  for (let i = 0; i < maxQuantity; i++) {
    let newMetadata = {
      description,
      external_url,
      image: `ipfs://${image}`,
      name,
      attributes: [
        {
          trait_type: 'Tier',
          value: tier,
        },
        {
          display_type: 'number',
          trait_type: 'Edition',
          max_value: maxQuantity,
          value: i + 1,
        },
        {
          display_type: 'date',
          trait_type: 'Digital Asset Creation Date',
          value: Date.now(),
        },
        {
          trait_type: 'Asset Backed',
          value: backed,
        },
        {
          trait_type: 'Category',
          value: category,
        },
        {
          trait_type: 'Subject',
          value: subject,
        },
        {
          trait_type: 'Team',
          value: team,
        },
        {
          trait_type: 'Type',
          value: typeMeta,
        },
        {
          trait_type: 'Authenticator',
          value: authenticator,
        },
        {
          trait_type: 'Grade',
          value: grade,
        },
        {
          trait_type: 'Authentication Type',
          value: authType,
        },
      ],
    };
    fs.writeFile(
      `../metadata/${subjectStrip}_${tierStrip}_${i + 1}.json`,
      JSON.stringify(newMetadata, null, 2),
      (err) => {
        if (err) {
          console.log('There was an error: ', err);
        } else {
          console.log('File successfully written.');
        }
      }
    );
  }
} else {
  fs.writeFile(
    `../metadata/${subjectStrip}_${tierStrip}.json`,
    JSON.stringify(Metadata, null, 2),
    (err) => {
      if (err) {
        console.log('There was an error: ', err);
      } else {
        console.log('File successfully written.');
      }
    }
  );
}