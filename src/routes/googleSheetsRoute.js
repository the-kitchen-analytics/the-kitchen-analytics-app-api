import { googleSheetsController } from "../googleSheets";

const googleSheetsRoute = Object.freeze({
    path: '/api/data',
    handler: googleSheetsController
});

export default googleSheetsRoute;