const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/plain" });
  response.end("Welcome");
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
