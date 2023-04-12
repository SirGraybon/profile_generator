const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question("Where are you from ", (city) => {
    rl.question("what is your favourite hobby ", (hobby) => {
      rl.question("what is your favorite meal(breakfast, lunch, or dinner) ", (meal) => {
        rl.question("What is your favorouite thing to eat ", (dish) => {
          rl.question("whats your go to show ", (power) => {
            console.log(`${name}, is on a life long journey to master ${hobby}, and is often found daydreaming about ${power}, while knocking back ${dish} for ${meal} in ${city}`);
            rl.close();
          });
        });
      });
    });
  });
});







