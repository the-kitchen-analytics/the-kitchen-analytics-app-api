import { Router } from 'express';
import googleSheetsService from './googleSheetsService';

const googleSheetsController = Router();

// middleware that is specific to this router
googleSheetsController.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
googleSheetsController.get('/', async (req, res) => {
    const data = await googleSheetsService.getAll();
    res.send(data);
});

googleSheetsController.post('/', async (req, res) => {
    const result = await googleSheetsService.append(JSON.parse(req.body));
    res.send(result);
});


export default googleSheetsController;