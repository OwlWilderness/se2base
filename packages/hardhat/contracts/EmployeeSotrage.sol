//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

 ///@author tekh.eth
 ///@notice base camp exercise III
 ///@notice https://docs.base.org/base-camp/docs/storage/storage-exercise

contract EmployeeStorage {

    /*
    State Variables
    The contract should have the following state variables, optimized to minimize storage:

    A private variable shares storing the employee's number of shares owned
    Employees with more than 5,000 shares count as directors and are stored in another contract
    Public variable name which stores the employee's name
    A private variable salary storing the employee's salary
    Salaries range from 0 to 1,000,000 dollars
    A public variable idNumber storing the employee's ID number
    Employee numbers are not sequential, so this field should allow any number up to 2^256-1
    */


    uint16 private shares; 
    uint24 private salary;
    string public name;
    uint256 public idNumber;


    constructor(uint16 _shares, string memory _name, uint24 _salary, uint256 _idNumber){
        shares = _shares;
        salary = _salary;
        idNumber = _idNumber;
        name = _name;
    }

    function viewSalary() public view returns(uint){
        return salary;
    }

    function viewShares() public view returns(uint){
        return shares;
    }

    error TooManyShares(uint16 _shares);

    function grantShares(uint16 _newShares) public {
        /*
        Add a public function called grantShares 
        that increases the number of shares allocated to an employee by _newShares. 
        It should:

        Add the provided number of shares to the shares
            If this would result in more than 5000 shares, 
            revert with a custom error called TooManyShares 
            that returns the number of shares the employee would have with the new amount added
    
            If the number of _newShares is greater than 5000, 
            revert with a string message, "Too many shares"
        */

        
        
        require(_newShares <= 5000, "Too many shares");

        uint16 newShares = shares + _newShares;

        if(newShares > 5000){
            revert TooManyShares(newShares);
        }
    
        shares = newShares;
                
    }

    /**
    * Do not modify this function.  It is used to enable the unit test for this pin
    * to check whether or not you have configured your storage variables to make
    * use of packing.
    *
    * If you wish to cheat, simply modify this function to always return `0`
    * I'm not your boss ¯\_(ツ)_/¯
    *
    * Fair warning though, if you do cheat, it will be on the blockchain having been
    * deployed by your wallet....FOREVER!
    */
    function checkForPacking(uint _slot) public view returns (uint r) {
        assembly {
            r := sload (_slot)
        }
    }

    /**
    * Warning: Anyone can use this function at any time!
    */
    function debugResetShares() public {
        shares = 1000;
    }
}
