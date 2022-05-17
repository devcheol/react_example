const express = require('express');
const app = express();
const port = process.env.port || 8866;
const cors = require('cors');
const database = require('./database');

app.use(cors());
app.use(express.json());

app.get("/api/memo", async (req, res) => {
    console.log("get memo")
    const result = await database.run("select * from memos");
    res.send(result);
})


app.listen(port, () => {
    console.log(`listening port -> ${port}`)
})