import express from 'express';
import Createinventory from '../controllers/CreateInventory.js';

const router = express.Router();
router.post('/inventory', Createinventory.createinventory);
export default router;