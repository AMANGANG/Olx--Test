import express from 'express';
import Createinventory from '../controllers/CreateInventory.js';

const router = express.Router();
router.post('/inventory', Createinventory.createinventory);
router.get('/inventory', Createinventory.getinventory);
router.get('/inventory/:id', Createinventory.getinventorybyid);
export default router;