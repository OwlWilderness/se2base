//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

 ///@author tekh.eth
 ///@notice base camp exercise 1

contract ControlStructures {
    function fizzBuzz(uint _number) public pure returns (string memory fizzBuzz){
    /*
    Create a function called fizzBuzz that accepts a uint called _number and returns a string memory. The function should return:

    "Fizz" if the _number is divisible by 3
    "Buzz" if the _number is divisible by 5
    "FizzBuzz" if the _number is divisible by 3 and 5
    "Splat" if none of the above conditions are true
    */
        bool fizz = false;
        bool buzz = false;
       
        if(_number % 3 == 0){
            fizz = true;
        } 

        if(_number % 5 == 0){
            buzz = true;
        }

        if(fizz && buzz ){
            return "FizzBuzz";
        } else if (fizz) {
            return "Fizz";
        } else if (buzz) {
            return "Buzz";
        } else {
            return "Splat";
        }
    }

    /*
    Create a function called doNotDisturb that accepts a uint called _time,
     and returns a string memory. It should adhere to the following properties:

    If _time is greater than or equal to 2400, trigger a panic
    If _time is greater than 2200 or less than 800, revert with a custom error of AfterHours, 
    and include the time provided
    If _time is between 1200 and 1299, revert with a string message "At lunch!"
    If _time is between 800 and 1199, return "Morning!"
    If _time is between 1300 and 1799, return "Afternoon!"
    If _time is between 1800 and 2200, return "Evening!"

    //this is a little weird as the time is 99 and not 59 but as an exercise...
    */

    error AfterHours(uint time);

    function doNotDisturb (uint _time) public pure returns (string memory message){
        assert(_time < 2400);

        if(_time > 2200 || _time < 800){
            revert AfterHours(_time);
        }

        if(_time >= 1200 && _time < 1300){
            revert ("At Lunch!");
        }

        if(_time >= 800 && _time < 1200){
            return "Morning!";
        }

        if(_time >= 1300 && _time < 1800){
            return "Afternoon!";
        }

        if(_time >= 1800 && _time <= 2200){
            return "Evening!";
        }
    }
}