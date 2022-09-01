const http = require("http");
const app = require("./app/app");
const DB = require("./db/db");
require("dotenv").config();
const server = http.createServer(app);
const PORT = process.env.PORT || 4242;
const uri = process.env.uri;
DB(uri);
if (DB) {
  server.listen(PORT, () => {
    console.log("server is running at http://localhost:" + PORT);
  });
}
