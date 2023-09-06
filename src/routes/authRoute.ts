import { Router } from 'express';
import {
  signUp
} from '../controllers/authController';

const router = Router();

router.post('/sign-up', signUp);

export default router;