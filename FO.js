// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extensions
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

// let firstNumber = process.argv[2]
// let secondNumber = process.argv[3]
//Helps Us to take input from terminal 
// console.log(Number(firstNumber) + Number(secondNumber))



const orgaizeWaaliFile = require("./commands/organize");

const helpModule = require("./commands/help");

const treeModule = require('./commands/tree')

let inputArr = process.argv.slice(2);

//console.log(inputArr);

let command = inputArr[0];

switch (command) {
  case "tree": //Helps to see the tree like structure of your folder
    treeModule.treeFnKey(inputArr[1])
    break;
  case "organize"://Organize all the files according to extension ans you give the directory or path to the input where all the files are present
    orgaizeWaaliFile.organizeFnKey(inputArr[1]); // dirPath
    break;
  case "help":
    helpModule.helpFnKey();//If you want help about these function then use help command
    break;

  default:
    console.log("Enter a Valid Command");
    break;
}






       










