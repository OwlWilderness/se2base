//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

 ///@author tekh.eth
 ///@notice base camp exercise 1

contract BasicMath {
    
    function adder (uint _a, uint _b) public pure returns (uint sum, bool error) {
        unchecked{
            sum = _a + _b;
            error = sum < (_a | _b);
        }
        return (sum, error);
    
    }

    function subtractor(uint _a, uint _b) public pure returns (uint difference, bool error) {
        unchecked{
            difference = _a - _b;
            error = difference > (_a | _b);
        }
        if(error){
            difference = 0;
        }
        return (difference, error);
    }
}