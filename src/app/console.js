//const Tomogachi = require('./tomogachi.js');
import Tomogachi from './tomogachi.js'

let pet = new Tomogachi("Pikachu", "cat");

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('tomogachi> ');
rl.prompt();
rl.on('line', function(line) {
	if (line === "exit") {
		rl.close();
	} else {

		var inputCmdPart = line;
		var inputString = "";
		//console.log("line.indexOf(\" \") = " + line.indexOf(" "));
		if (line.indexOf(" ") >= 0) {
			//console.log("inside if")
			inputCmdPart = line.substr(0, line.indexOf(" "));
			//console.log("inputCmdPart = " + inputCmdPart);
			inputString = line.substr(line.indexOf(" ") + 1, line.length - line.indexOf(" "));
			//console.log("inputString = " + inputString);
		}
		//get first word of string
		switch(inputCmdPart)
		{
			case "feed":
				console.log(pet.feed());
				break;
			case "exercise":
				pet.exercise();
				break;
			case "look":
				console.log(pet.showType());
				break;
			case "talk":
				console.log(pet.talk());
				break;
			case "status":
				console.log(`Power Level: ${pet.powerLevel}`);
				console.log(`Food Level: ${pet.foodLevel}`);
				break;
			case "say":
				console.log(inputString);
				break;
			case "clear":
				console.clear();
				break;
			case "list":
			case "help":
				console.log(`feed\r\nexercise\r\nlook\r\ntalk\r\nstatus\r\nsay <text>\r\nclear\r\nlist`);
				break;
		}
		rl.prompt();
	}
	
}).on('close',function(){
    process.exit(0);
});

// console.log(`Current directory: ${process.cwd()}`);
