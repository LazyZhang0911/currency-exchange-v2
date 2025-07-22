import express from 'express';
export const router = express.Router();
import * as watchlistController from '../controllers/watchlistController.js';

router.get('/watchlists', watchlistController.getWatchlists);
router.get('/watchlists/search', watchlistController.searchWatchlist);  // 保留一个
router.get('/watchlists/:id', watchlistController.getWatchlistById);
router.post('/watchlists', watchlistController.createWatchlist);
router.put('/watchlists/:id', watchlistController.updateWatchlist);
router.delete('/watchlists/:id', watchlistController.deleteWatchlist);
