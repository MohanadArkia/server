const http = require("http");

const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");
const aboutPage = readFileSync("./pages/about.html");
const errorPage = readFileSync("./pages/error-page.html");

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === "/") {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write(homePage);
    response.end();
  } else if (url === "/about") {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write(aboutPage);
    response.end();
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.write(errorPage);
    response.end();
  }
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
