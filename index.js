const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

require('dotenv').config();

app.use(cors({
    origin: process.env.FRONTEND || "*"
}));


app.get('/', (req, res) => {
    res.json('Hello, world!  connect  successfully');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
