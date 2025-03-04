// Create web server
// Create a web server that listens to requests on port 8080 and returns the comments.json file when the URL is /comments. Use the fs module to read the file and the http module to create the server. The comments.json file contains an array of objects with the following structure:

// [
//   {
//     "id": 1,
//     "comment": "This is a comment"
//   },
//   {
//     "id": 2,
//     "comment": "This is another comment"
//   },
//   {
//     "id": 3,
//     "comment": "This is yet another comment"
//   }
// ]
// When the server receives a request, it should read the comments.json file and send it back as the response. Use the JSON.stringify method to convert the array of objects to a string before sending it back.

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  fs.readFile("./comments.json", "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});