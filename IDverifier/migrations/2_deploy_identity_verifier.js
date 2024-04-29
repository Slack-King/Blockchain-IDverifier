const IdentityVerifier = artifacts.require("IdentityVerifier");

module.exports = function(deployer) {
  deployer.deploy(IdentityVerifier);
};

