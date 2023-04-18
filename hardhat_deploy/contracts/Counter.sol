// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint public total;
    uint public subtracted;
    uint public multiplied;
    uint public divided;
    
    function add(uint a, uint b) public {
    total = a + b;
}

function subtract(uint a, uint b) public {
    require(a >= b, "Subtraction result must be positive");
    subtracted = a - b;
}

function multiply(uint a, uint b) public {
    multiplied = a * b;
}

function divide(uint a, uint b) public {
    require(b != 0, "Cannot divide by zero");
    divided = a / b;
}
function getTotal() public view returns (uint) {
    return total;
}

function getSubtracted() public view returns (uint) {
    return subtracted;
}

function getMultiplied() public view returns (uint) {
    return multiplied;
}

function getDivided() public view returns (uint) {
    return divided;
}
function getResults() public view returns (uint, uint, uint, uint) {
    return (total, subtracted, multiplied, divided);
}

}