const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})