import express from 'express';
import ManageInventory from '../controllers/ManageInventory.js';

const router = express.Router();
router.post('/inventory', ManageInventory.createinventory);
router.get('/inventory', ManageInventory.getinventory);
router.get('/inventory/:id', ManageInventory.getinventorybyid);
router.put('/inventory/:id', ManageInventory.updateinventory);
router.delete('/inventory/:id', ManageInventory.deleteinventory);
export default router;