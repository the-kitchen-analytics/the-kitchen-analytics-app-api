import { Router } from 'express';
import googleSheetsService from './googleSheetsService';

const googleSheetsController = Router();

// middleware that is specific to this router
googleSheetsController.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

googleSheetsController.get('/info', async (req, res, next) => {
    try {
        const result = await googleSheetsService.getDocInfo();
        res.send(result);
    } catch (e) {
        return next(e);
    }
});

googleSheetsController.get('/', async (req, res, next) => {
    try {
        const result = await googleSheetsService.getAll();
        res.send(result);
    } catch (e) {
        return next(e);
    }
});

googleSheetsController.post('/', async (req, res, next) => {
    try {
        const result = await googleSheetsService.append(req.body);
        res.send(result);
    } catch (e) {
        return next(e);
    }
});


export default googleSheetsController;