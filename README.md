# Vineet Hostel

# Objective
1. To make a smart contract with 2-3 functions
2. To Show the values of functions in frontend of the application.
![image](https://github.com/user-attachments/assets/2ac82cd7-c0c7-4438-a621-4ac0eda51dc2)




# Description 
After cloning the github, you will want to do the following to get the code running on your computer.
1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.
Typically at http://localhost:3000/

# Getting Started
this code we are running on the online Solidity IDE that is https://remix.ethereum.org/ here we'll perform the code. as we are on the remix website just by clicking on th start coding we'll able to do coding in Solidity.

## Implementation
Here, i implemented many functions in frontend along with values of state variables.
1. Adding New student to list.
2. Removing existing student from list.
3. Removing total students in the list.
4. Connecting to metamask and function to disconnect also added here.
![image](https://github.com/user-attachments/assets/2fce1445-fd6f-48d0-b886-9e11315908a5)




# Executing Program
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract StudentBook {
    address immutable OWNER;
    struct student {
        string name;
        uint age;
        address _address;
        string date;
    }
    mapping(address => uint) private studentCount;
    mapping(address => uint) private removedStudent;
    mapping(address => student[]) private studentList;

    modifier onlyOwner() {
        _onlyMe();
        _;
    }

    function _onlyMe() private view {
        require(OWNER == msg.sender, "Caller is not the owner");
    }

    constructor() {
        OWNER = msg.sender;
    }

    function addStudentInList(
        string memory _name,
        uint _age,
        address _address,
        string memory _date
    ) external {
        studentList[msg.sender].push(student(_name, _age, _address, _date));
        studentCount[msg.sender]++;
    }

    function returnstudentList() external view returns (student[] memory) {
        uint l = studentList[msg.sender].length;
        uint TotalstudentsRemaining = studentCount[msg.sender] -
            removedStudent[msg.sender];
        uint index = 0;

        student[] memory newstudentArray = new student[](
            TotalstudentsRemaining < 1 ? 0 : TotalstudentsRemaining
        );

        for (uint i = 0; i < l; i++) {
            student memory val = studentList[msg.sender][i];
            if (val._address != address(0)) {
                newstudentArray[index] = val;
                index++;
            }
        }
        return newstudentArray;
    }

    function removestudent(uint index) external {
        uint lastIndex = studentList[msg.sender].length;

        studentList[msg.sender][index] = studentList[msg.sender][lastIndex - 1];
        studentList[msg.sender].pop();

        removedStudent[msg.sender]++;
    }

    function totalstudent() external view returns (uint) {
        return studentCount[msg.sender] - removedStudent[msg.sender];
    }

    function totalRemoved() external view returns (uint) {
        return removedStudent[msg.sender];
    }
}

```
To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.9" (or another compatible version), and then click on the ("Compile "the name of the file" ") for ex. comple first.sol button. Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "Assessment.sol" contract from the dropdown menu, and then click on the "Deploy" button. then u can see a the below of the option ' Deployed/Unpinned Contracts ' expand it and balances mint burn etc and now u can see our code is ready to run .
