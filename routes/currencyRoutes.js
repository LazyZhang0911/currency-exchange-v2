import express from 'express';
import * as currencyController from '../controllers/currencyController.js';

export const router = express.Router();

router.get('/currencies', currencyController.getCurrencies);
router.get('/currencies/search', currencyController.searchCurrency);
router.get('/currencies/:id', currencyController.getCurrencyById);
router.post('/currencies', currencyController.createCurrency);
router.put('/currencies/:id', currencyController.updateCurrency);
router.delete('/currencies/:id', currencyController.deleteCurrency);

