import inquirer from "inquirer"


const random_number = Math.random()*10
const number = Math.ceil(random_number)

console.log(`welcome to number guessing game!`);
console.log(`you have three chances to win`);



let lifes = 3
let i =0

while(i<3){

    
  let question = await inquirer.prompt([
        {
            
            name : "num" ,
            type: number,
            message: "type your guessed number between 1-10"
            
        }
    ])
 i++

    
 
 if(question.num == number ){
     console.log(`congrats you guessed correct`);
     break;
     
    }else{
        console.log(`you have ${lifes-=1} life left`);
        console.log(`try again`);
        
    
        
        
    }
}