require("dotenv").config();

const port = process.env.PORT || 9000;

const server = require("./api/server");

server.listen(port, () => {
  console.log(`Lİstening API on port${port}`);
});
