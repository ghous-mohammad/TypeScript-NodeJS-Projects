#! usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    name: "firstvalue",
    message: "type your first value",
    type: "number",
  },
  {
    name: "secoundvalue",
    message: "type your secound value",
    type: "number",
  },
  {
    name: "operator",
    type: "list",
    choices: ["addition", "substraction", "division", "multipliation"],
    message: "select operation",
  },
]);

if(answer.operator == "addition"){
   console.log(` ${answer.firstvalue + answer.secoundvalue} `); 
    
    
}
else if(answer.operator == "substraction"){
    console.log(` ${answer.firstvalue - answer.secoundvalue} `); 
    
}
else if(answer.operator == "multiplication"){
    console.log(` ${answer.firstvalue} *  ${answer.secoundvalue} `); 
    ;
}
else if(answer.operator == "division"){
    console.log(` ${answer.firstvalue} /  ${answer.secoundvalue} `); 

}