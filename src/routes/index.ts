import { Router } from 'express';
import { create, find, findOne, update, deleteUser } from '../modules/user/user.controller';

const router = Router();

router.post('/users', create);
router.get('/users', find);
router.get('/users/:id', findOne);
router.patch('/users/:id', update);
router.delete('/users/:id', deleteUser);

export default router;
