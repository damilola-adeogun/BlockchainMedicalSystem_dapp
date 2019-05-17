module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      gas: 3000000, // added because on truffle migrate, it showed exceed gas value error
      network_id: "*" // Match any network id
    }
  }
};
