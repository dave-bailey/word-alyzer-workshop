const readline = require('readline');
const { start } = require('repl');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

async function program() {
  console.log("Helllooo! I am the incredible WORD-ALYZER. And I have so much to say. Give me a word and I will give you an opinion~")
  let input = await ask("\n>_")
  input = input.toLowerCase()

  if (!isNaN(input)) {
    console.log("I said a WORD!")
    process.exit()
  } else {
    if (input.length <= 3) {
      console.log("Hardly a word.")
      if ((input.includes("a")) || (input.includes("i")) || (input.includes("e")) || (input.includes("o")) || (input.includes("u"))) {
        console.log("But still a word!")
        if (input.includes("ee")) {
          console.log("My advice? Just BEE yourself.")
          program()
        }
      } else {
        console.log("Wait... that's NOT a word!")
        process.exit()
      }
      if (input.includes("no")) {
        console.log("Why be rude?")
        process.exit()
      } else if (input.includes("bye")) {
        console.log("Don't leave me ): Stay!")
        let input = await ask("\n>_")
        if (input.includes("stay")) {
          console.log("⋆˙⟡♡")
          program()
        } else {
          console.log("Too bad♡")
          program()
        }
      }
    } else if (input.length > 3 && input.length < 6) {
      console.log("Let's get started!")
      if (input.includes("meow")) {
        console.log(" ( ⓛ ω ⓛ *)")
        process.exit() }
      if (input.length === 4) {
        console.log("Stuck in the middle with you~")
        process.exit()
      } else {
        console.log("Why did 3 4 5?")
        let input = await ask("\n>_")
        if (input.toLowerCase().includes("why")) {
          console.log("That's numbers, baby.")
        } else {
          console.log("No sense of humor, I see.")
        }
        process.exit()
      }

      

    } else if (input.length >= 10) {
      console.log("Feeling wordy I see (:")
      if (input.includes("z")) {
        console.log("The ugliest letter!")
        if (input.includes("zz")) {
          console.log("AND you put TWO of them????")
          process.exit()
        }
        process.exit()
      }
    } else {
      console.log("A Goldilocks word.")
      if (input.includes("frog")) {
        console.log("𓆏")
        if (input.includes("froggy")) {
          console.log("Ya gettin' froggy with me!?")
          process.exit()
        } else {
          console.log("Ribb-OUT")
          process.exit()
        }
      } else if (input.includes("goose")) {
        console.log("𓅬")
        if (input.includes("goosey") || (input.includes("loosey"))) {
          console.log("LooOseeeyy GooOoseeeYY")
          process.exit()
        }
      }
      process.exit()
    }
  }
}


program()