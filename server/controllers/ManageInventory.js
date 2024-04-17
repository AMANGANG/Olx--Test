import InventoryData from "./InventoryData.js";
import Inventory from "../models/InventoryDataSchema.js";

class ManageInventory {
    async createinventory(req, res) {
        const inventorydata= new InventoryData(req.body);
        const newinventory = new Inventory(inventorydata);
        try {
            await newinventory.save();
            res.status(201).json(newinventory);
        } catch (error) {
            res.status(409).json({message:error.message});
        }
    }
    async getinventories (req, res) {
        try {
            const inventory = await Inventory.find().select('-_id');
            res.status(200).json(inventory);
        } catch (error) {
            res.status(404).json({message:error.message});
        }
    }
    
    async getinventorybysku (req, res)  {
        const { SKU } = req.params;
        try {
            const inventory = await Inventory.findOne({ SKU: SKU});
            if (!inventory) {
                return res.status(404).json({ message: 'Inventory not found' });
            }
            res.status(200).json(inventory);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
   
    async deleteinventorybysku  (req, res) {
        const { SKU } = req.params;
        try {
            const inventory = await Inventory.findOne({ SKU: SKU });
            if (!inventory) {
                return res.status(404).json({ message: 'Inventory not found' });
            }
            await Inventory.findByIdAndDelete(inventory._id);
            res.json({ message: 'Inventory deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
export default ManageInventory;