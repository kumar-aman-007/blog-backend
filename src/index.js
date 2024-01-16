import express from 'express'
import connectToDB from './config/db/index.js';

import bodyParser from 'body-parser';

import config from './config/serverConfig.js';

const PORT = config.PORT;

const app = express();

const startServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    })

    await connectToDB();
    
    app.get("/home", (req, res) => {
        res.send("Welcome to my blog app.");
    })
}

startServer()