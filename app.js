// Require express
import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import { googleSheetsController } from './googleSheets';

dotenv.config();

const init = ({ port, customHandlers = [] }) => {
    // Initialize express
    const app = express();
    // parse JSON
    app.use(json());
    // parse URL encoded data
    app.use(urlencoded({ extended: true }));

    // add custom handlers
    customHandlers.forEach(({ path, handler }) => app.use(path, handler))

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

const { PORT } = process.env;

if (PORT) {
    const customHandlers = [
        {
            path: '/api',
            handler: googleSheetsController
        }
    ];

    init({ port: PORT, customHandlers });
} else {
    console.error('Port is not specified.', PORT);
}