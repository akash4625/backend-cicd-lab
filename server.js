
function getStatus() {
  return {
    message: "Backend application is running successfully",
    status: "success"
  };
}

if (require.main === module) {
  const http = require("http");

  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify(getStatus()));
  });

  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = { getStatus };
