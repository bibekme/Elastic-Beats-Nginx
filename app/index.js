const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    message: "Server is reachable",
    statusCode: res.statusCode,
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
