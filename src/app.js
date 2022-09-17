import express, { json, urlencoded } from "express";
import cors from 'cors';
import { errorHandler, logErrors } from "./handlers";
import * as routes from "./routes";
import applicationConfig from "./config/applicationConfig";

const init = ({ port, customRoutes }) => {
    console.debug('Start init server.');

    process.on('uncaughtException', err => {
        console.error('uncaughtException', err);
    });

    // Initialize express
    const app = express();
    // parse JSON
    app.use(json());
    // parse URL encoded data
    app.use(urlencoded({ extended: true }));

    const corsOptions = {
        origin: '*',
        credentials: true,            //access-control-allow-credentials:true
        optionSuccessStatus: 200
    }

    app.use(cors(corsOptions)); // Use this after the variable declaration

    // add custom route handlers
    customRoutes.forEach(({ path, handler }) => app.use(path, handler));

    // error handlers
    app.use(logErrors);
    app.use(errorHandler);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}.`);
        console.debug('Finish init server.')
    });
}

const { port } = applicationConfig

if (port) {
    const customRoutes = [...Object.values(routes)];
    init({ port, customRoutes });
} else {
    console.error('Port is not specified.', port);
}