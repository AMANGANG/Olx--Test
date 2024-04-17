import express from 'express';
import ManageInventory from '../controllers/ManageInventory.js';

const router = express.Router();

const manageinventory= new ManageInventory();
router.post('/inventory', manageinventory.createinventory.bind(manageinventory));
router.get('/inventory', manageinventory.getinventories.bind(manageinventory));
router.get('/inventory/:SKU', manageinventory.getinventorybysku.bind(manageinventory));
router.delete('/inventory/:SKU', manageinventory.deleteinventorybysku.bind(manageinventory));
export default router;