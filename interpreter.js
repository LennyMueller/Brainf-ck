var code = "->++>+++<->++++++++++++++++++++++++++++++++++++++++++++.+++++.";

var memory = [0];
var memPos = 0;

function parse(prg) {

  var prgPos = 0;

  while (prgPos < prg.length) {

    if (prg[prgPos] === ">") {
      memPos++;
      if (memory.length <= memPos) {
        memory.push(0);
      }
    } else if (prg[prgPos] == "<") {
      memPos--;
      if (memPos < 0) {
        console.error("Error: Pointer moved out of memory!")
        return;
      }
    } else if (prg[prgPos] == "+") {
      memory[memPos]++;
      if (memory[memPos] >= 255) {
        memory[memPos] = 0;
        console.warn("Memory limit exceeded");
      }
    } else if (prg[prgPos] == "-") {
      memory[memPos]--;
      if (memory[memPos] <= 0) {
        memory[memPos] = 255;
        console.warn("Memory limit exceeded");
      }
    } else if (prg[prgPos] == ".") {
      console.log(String.fromCharCode(memory[memPos]));
    } else if (prg[prgPos] == ",") {
      console.log("Input: ");
      //dosmoething() I am actually to lazy to implement that function
    } else if (prg[prgPos] == "[") {
      
    } else if (prg[prgPos] == "]") {

    }

    prgPos++;
  }

  console.log(memory);

}



parse(code);







/** //ASYNC INPUT


const io = require('console-read-write');

async function main() {
  // Simple readline scenario
  io.write('I will echo whatever you write!');
  io.write(await io.read());

  // Simple question scenario
  io.write(`hello ${await io.ask('Who are you?')}!`);

  // Since you are not blocking the IO, you can go wild with while loops!
  let saidHi = false;
  while (!saidHi) {
    io.write('Say hi or I will repeat...');
    saidHi = await io.read() === 'hi';
  }

  io.write('Thanks! Now you may leave.');
}

main();
// I will echo whatever you write!
// > ok
// ok
// Who are you? someone
// hello someone!
// Say hi or I will repeat...
// > no
// Say hi or I will repeat...
// > ok
// Say hi or I will repeat...
// > hi
// Thanks! Now you may leave


**/
