pragma solidity >=0.4.22;


contract Election {
  
  struct Candidate {
    uint id;
    string name;
    uint voteCount;
  }
  
  mapping(uint => Candidate) public candidates;
  
  constructor() public {
    addCandidate("Hrishabh");
    addCandidate("Aman");
  }
  
  uint public candidatesCount;
  
  function addCandidate(string memory _name) private {
    candidatesCount++;
    candidates[candidatesCount]=Candidate(candidatesCount,_name,0);
  }




}
