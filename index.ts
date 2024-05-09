#! /usr/bin/env node
import inquirer from "inquirer";

const Quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
  question_6: string;
  question_7: string;
  question_8: string;
  question_9: string;
  question_10: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message:
      "Q1.What is the correct way to check if two values are not equal in Typescript?",
    choices: ["a == b", "a === b", "a = b", "a !== b"],
  },
  {
    name: "question_2",
    type: "list",
    message:
      "Q2.Which of the following characters is commonly allowed in variable names in Typescript?",
    choices: ["$", "@", "#", "&"],
  },
  {
    name: "question_3",
    type: "list",
    message:
      "Q3.Which operator is commonly used for string concatenation in Typescript?",
    choices: ["+", "-", "*", "/"],
  },
  {
    name: "question_4",
    type: "list",
    message:
      "Q4.In Typescript, which symbol is coomonly used to terminate a statement?",
    choices: [".", ":", ";", ","],
  },
  {
    name: "question_5",
    type: "list",
    message:
      "Q5.Which method of Inquirer.js is used to start the prompt interface and recive input?",
    choices: ["start()", "propmt()", "init()", "run()"],
  },
  {
    name: "question_6",
    type: "list",
    message: "Q6.TypeScript is a superset of which language?",
    choices: ["Python", "JavaScript", "C++", "Java"],
  },
  {
    name: "question_7",
    type: "list",
    message:
      "Q7.Which method is used to convert a TypeScript file to JavaScript?",
    choices: ["ts-compile", "tsc", "typescript-compile", "ts-convert"],
  },
  {
    name: "question_8",
    type: "list",
    message: "Q8.What object oriented terms does Typescript support?",
    choices: ["Interfaces", "Classes", "Modules", "All of the above"],
  },
  {
    name: "question_9",
    type: "list",
    message:
      "Q9.Which of the options below power the interactive TypeScript experience in Visual Studio, Vs Code,Sublime, the TypeScript playground and other editor.",
    choices: [
      "TypeScript main",
      "TypeScript language",
      "TypeScript compiler",
      "TypeScript method",
    ],
  },
  {
    name: "question_10",
    type: "list",
    message: "Q10.What variable scopes are available in TypeScript?",
    choices: ["All of the above", "Global Scope", "Local Scope", "Class Scope"],
  },
]);

let score: number = 0;
//Q1
switch (Quiz.question_1) {
  case "a !== b":
    console.log("1. Correct");
    ++score;
    break;
  default:
    console.log("1. Incorrect!");
}

//Q2
switch (Quiz.question_2) {
  case "$":
    console.log("2. Correct");
    ++score;
    break;
  default:
    console.log("2. Incorrect!");
}

//Q3
switch (Quiz.question_3) {
  case "+":
    console.log("3. Correct");
    ++score;
    break;
  default:
    console.log("3. Incorrect!");
}

//Q4
switch (Quiz.question_4) {
  case ";":
    console.log("4. Correct");
    ++score;
    break;
  default:
    console.log("4. Incorrect!");
}

//Q5
switch (Quiz.question_5) {
  case "propmt()":
    console.log("5. Correct");
    ++score;
    break;
  default:
    console.log("5. Incorrect!");
}

//Q6
switch (Quiz.question_6) {
  case "JavaScript":
    console.log("6. Correct");
    ++score;
    break;
  default:
    console.log("6. Incorrect!");
}

//Q7
switch (Quiz.question_7) {
  case "tsc":
    console.log("7. Correct");
    ++score;
    break;
  default:
    console.log("7. Incorrect!");
}

//Q8
switch (Quiz.question_8) {
  case "All of the above":
    console.log("8. Correct");
    ++score;
    break;
  default:
    console.log("8. Incorrect!");
}

//Q9
switch (Quiz.question_9) {
  case "TypeScript language":
    console.log("9. Correct");
    ++score;
    break;
  default:
    console.log("9. Incorrect!");
}

//Q10
switch (Quiz.question_10) {
  case "All of the above":
    console.log("10. Correct");
    ++score;
    break;
  default:
    console.log("10. Incorrect!");
}

console.log(`Score: ${score}`);
