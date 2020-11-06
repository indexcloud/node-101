const fs = require("fs");
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("filename: ", function (file) {
	readline.close();
	fs.readFile(file, function (error, content) {
		if (error) {
			console.log(`ENOENT: no such file or directory, open 'blah.txt'`);
		}
		console.log(content);
	});
});
