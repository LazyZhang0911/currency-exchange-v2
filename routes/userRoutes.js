import express from 'express';
import * as userController from '../controllers/userController.js';

export const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/search', userController.searchUser);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/update/:id', userController.updateUser);
router.delete('/users/detele/:id', userController.deleteUser);
