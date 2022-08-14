import { Router } from 'express';
import main from './main.route';
import auth from './auth.route';

const router = Router();
router.use("/", main);
router.use("/auth", auth);

export default router;