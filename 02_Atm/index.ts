import inquirer from "inquirer";

console.log(`welcome to ATM`);

const login = await inquirer.prompt([
  {
    type: "input",
    name: "user_id",
    description: "Type your user id",
  },
  {
    type: "password",
    name: "password",
    description: "Type your password",
  },
]);

let balance = Math.floor(Math.random() * 10000);

async function functionality() {
  console.log("login successfull");
  console.log(`your current balance is ${balance}`);

  let question = await inquirer.prompt([
    {
      name: "choice",
      type: "list",
      choices: ["balance inquiry", "deposit fund", "cash withdrawl", "exit"],
      message: "Select what operation do you want?",
    },
  ]);
  if (question.choice === "balance inquiry") {
    console.log(`your balance is ${balance}`);
    let res = await inquirer.prompt([
      {
        name: "select",
       message: "is there any thing you want to?",
        type: "list",
        choices: ["yes", "no"],
      },
    ]);

    if (res.select == "yes") {
      await functionality();
    }
  } else if (question.choice === "deposit fund") {
    let fund = await inquirer.prompt([
      {
        name: "deposit",
        type: "number",
        description: "how much fund you want to deposit",
      },
    ]);

    console.log(`your amount is successfully deposited`);
    console.log(`your previus balance is ${balance}`);
    balance += fund.deposit;
    console.log(`your current balance is ${balance}`);

    let res = await inquirer.prompt([
      {
        name: "select",
        message: "is there any thing you want to?",
        type: "list",
        choices: ["yes", "no"],
       
      },
    ]);

    if (res.select == "yes") {
      await functionality();
    }
  } else if (question.choice === "cash withdrawl") {
    let fund = await inquirer.prompt([
      {
        name: "withdrawl",
        type: "number",
        description: "how much fund you want to withdrawl",
      },
    ]);
    if (fund.withdrawal > balance) {
      console.log(`Insufficient balance for withdrawal.`);
    } else {
      console.log(`your amount is successfully withdrawl`);
      console.log(`your previous balance is ${balance}`);
      balance -= fund.withdrawl;
      console.log(`your remaining balance is ${balance}`);
    }
    let res = await inquirer.prompt([
      {
        name: "select",
        message: "is there any thing you want to?",
        type: "list",
        choices: ["yes", "no"],
      },
    ]);

    if (res.select == "yes") {
      await functionality();
    }
  }
  else if(question.choice === "exit"){
    console.log("thankque for using our ATM");
    
  }
}

if (login.user_id === "admin" && login.password === "admin") {
  await functionality();
} else {
  console.log("failed");
}
