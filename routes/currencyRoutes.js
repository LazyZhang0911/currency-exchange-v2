import express from 'express';
import * as currencyController from '../controllers/currencyController.js';

export const router = express.Router();

router.get('/currencies', currencyController.getCurrencies);
router.get('/currencies/search', currencyController.searchCurrency);
router.get('/currencies/:id', currencyController.getCurrencyById);
router.post('/currencies/insert', currencyController.createCurrency);
router.put('/currencies/update/:id', currencyController.updateCurrency);
router.delete('/currencies/delete/:id', currencyController.deleteCurrency);

