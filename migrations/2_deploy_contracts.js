var Medical = artifacts.require("./Medical.sol");

module.exports = function(deployer) {
  deployer.deploy(Medical);
};