require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/8RLadLhJzz6aGpFKGC4oWJjb70zq1755',
      accounts: ['d3a4429764a31cf055807eb446043b5268d5512b2f0848a3b58c5d2d870ef807'],
    },
  },
};