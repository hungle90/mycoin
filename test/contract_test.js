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

  contract('StandardToken', function (accounts) {
    it("should send coin correctly", async () => {

        // Get initial balances of first and second account.
        let account_one = accounts[0];
        let account_two = accounts[1];

        let amount = 10;


        let instance = await StandardToken.deployed();
        let meta = instance;

        let balance = await meta.balanceOf(account_one).call({from: account_one});
        let account_one_starting_balance = balance.toNumber();

        balance = await meta.balanceOf(account_two).call({from: account_two});
        let account_two_starting_balance = balance.toNumber();
        await meta.transferFrom(account_one_starting_balance, account_two_ending_balance, amount);

        balance = await meta.balanceOf(account_one);
        let account_one_ending_balance = balance.toNumber();

        balance = await meta.balanceOf.call(account_two);
        let account_two_ending_balance = balance.toNumber();

        assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
        assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
        });

        it("should show the transfer event", function() {
          var token;
          return StandardToken.deployed().then(function(instance){
            token = instance;
            return token.transfer(accounts[1], 100000);
          }).then(function(result){
            console.log(result.logs[0].event)
          })
});


});
