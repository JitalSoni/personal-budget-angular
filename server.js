// Budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = require("./data_");
console.log(budget);



app.get('/budget',(req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API app listening at http://localhost:${port}`);
});
