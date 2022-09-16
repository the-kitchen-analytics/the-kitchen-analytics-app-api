import { Router } from 'express';
import googleSheetsService from './googleSheetsService';

const googleSheetsController = Router();

// middleware that is specific to this router
googleSheetsController.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

googleSheetsController.get('/info', async (req, res) => {
    const result = await googleSheetsService.getDocInfo();
    res.send(result);
});

googleSheetsController.get('/', async (req, res) => {
    const result = await googleSheetsService.getAll();
    res.send(result);
});

googleSheetsController.post('/', async (req, res) => {
    const result = await googleSheetsService.append(req.body);
    res.send(result);
});


export default googleSheetsController;