const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = "";
let hobby = "";
let city = "";
let meal = "";
let dish = "";
let power = "";

rl.question('What is your name? ', (answer) => {
  name = answer;
  rl.question("Where are you from ", (answer) => {
    city = answer;
    rl.question("what is your favourite hobby ", (answer) => {
      hobby = answer;
      rl.question("what is your favorite meal(breakfast, lunch, or dinner) ", (answer) => {
        meal = answer;
        rl.question("What is your favorouite thing to eat ", (answer) => {
          dish = answer;
          rl.question("wjhats your go to show ", (answer) => {
            power = answer;



            console.log(`${name}, is on a life long journey to master ${hobby}, and is often found daydreaming about ${power}, while knocking back ${dish} for ${meal}`);
            rl.close();



          });
        });
      });
    });
  });
});







