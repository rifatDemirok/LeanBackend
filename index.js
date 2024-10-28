const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const database = require('./Config/Database');


dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));


const PORT= 4000;

app.get('/', (req, res) => {
    req.send('Welcome to the server');
});


database();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})