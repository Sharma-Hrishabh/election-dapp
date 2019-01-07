var Election = artifacts.require("./Election.sol");

contract('Election',function(accounts) {

    it('initialises the contract with two candidates', () => {
    return Election.deployed().then(function(instance){
        return instance.candidatesCount();
    }).then(function(count){
        assert.equal('2',count);
    });
  });

   it('initilises the candidates with correct values', () => {
       return Election.deployed().then((instance)=>{
        electionInstance = instance;
        return electionInstance.candidates(1);
       }).then((candidate)=>{
           assert.equal(candidate[0], 1, "contains correct id");
            assert.equal(candidate[1], "Hrishabh", "correct candidate1 name");
            assert.equal(candidate[2],0, "correct votecount1");
            return electionInstance.candidates(2);
       }).then((candidate)=>{
        assert.equal(candidate[0], 2, "contains correct id");
        assert.equal(candidate[1], "Aman", "correct candidate2 name");
        assert.equal(candidate[2], "0", "correct votecount2");
       });
       
   });




});