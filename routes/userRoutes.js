import express from 'express';
import * as userController from '../controllers/userController.js';

export const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/search', userController.searchUser);  // 注意这里改成 searchUser
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
