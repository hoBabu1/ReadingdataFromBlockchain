//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0; // version 
contract Calculator {

    string public name = "Manikant";
    uint256 num1 = 5;
    uint256 num2 = 10;
    uint256 private add ;
    uint256 private sub;
    uint256 private multiply;
    uint256 private div;

    function addition() public  returns(uint256){
        add= num2+num1;
        return add;
    }
    function subtraction() public  returns(uint256){
        sub = num2-num1;
        return sub;
    }
    function multiplication() public  returns(uint256){
       multiply = num2*num1;
       return multiply;
    }
    function division() public  returns(uint256){
        div = num2/num1;
        return div;
    }

    function getAddition() external view  returns(uint256)
    {
        return add;
    }
    function getSubtraction() external view returns(uint256)
    {
        return sub;
    }
    function getMultiplication() external view returns(uint256)
    {
        return multiply;
    }
    function getDivision()external view returns(uint256)
    {
        return div;
    }

}