var Election = artifacts.require("./Election.sol");

contract('Election',function(accounts) {

    it('initialises the contract with two candidates', () => {
    return Election.deployed().then(function(instance){
        return instance.candidatesCount();
    }).then(function(count){
        assert.equal('2',count);
    });
});
});