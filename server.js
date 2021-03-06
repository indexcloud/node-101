const http = require("http"); // comes from standard library or stdlib

const hostname = "127.0.0.1"; // localhost
const port = 3002;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-type", "text/plain");
	res.end("Hello World");
});

// starting the server
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
