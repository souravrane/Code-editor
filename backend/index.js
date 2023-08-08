const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.post("/python", (req, res) => {
    console.log(req.body);
    res.send({ message: "success" });
    console.log("hello..");
});

app.post("/javascript", (req, res) => {
    console.log(req.body);
    res.send({ message: "success" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
