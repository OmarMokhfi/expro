const express = require("express");
const helmet = require("helmet");
const router = require("./routers");

const app = express();

app.use(express.json());
app.use(helmet());

app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(5000);
