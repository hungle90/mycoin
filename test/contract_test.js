const contractTestDemo = artifacts.require("IcoContract");
const Ownable = artifacts.require("IcoContract");
const StandardToken = artifacts.require("IcoContract");

contract('contractTestDemo', function(accounts) {
  it("should assert true", function(done) {
    var contract_test = contractTestDemo.deployed();
    assert.isTrue(true);
    done();
    });
});
contract('Ownable', function (accounts) {
  it("owner address is the first account", function () {
    var meta;

    return Ownable.deployed().then(function (instance) {
      meta = instance;
      return meta.owner();
    }).then(function (owner) {
      assert.equal(accounts[0], owner, "owner is not the first account");
      });
    });
  });
