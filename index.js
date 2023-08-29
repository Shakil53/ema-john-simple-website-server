const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;


//midleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('John is busy shopping')

})
app.listen(port, () => {
    console.log(`ema john server is running on port: ${port}`);
})
