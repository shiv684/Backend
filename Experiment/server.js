const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (method === "POST" && url.pathname === "/user") {
    let body = "";

    req.on("data", (chunk) => {
      console.log("chunk:", chunk.toString());
      body += chunk;
    });

    req.on("end", () => {
      console.log("final body:", body);

      fs.appendFile("shiv.txt", body + "\n", (err) => {
        if (err) {
          console.log("FILE ERROR:", err);
          res.writeHead(500);
          res.end("file write error");
          return;
        }

        res.writeHead(201, { "Content-Type": "text/plain" });
        res.end("data written");
      });
    });
  } else {
    res.writeHead(404);
    res.end("not found");
  }
});

server.listen(4000, () => {
  console.log("server listening on 4000");
});
