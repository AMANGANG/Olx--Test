import InventoryData from "./InventoryData.js";
import Inventory from "../models/InventoryDataSchema.js";
import resposnse from "../controllers/ResponseInventory.js";

class ManageInventory {
    async createinventory(req, res) {
        const inventorydata= new InventoryData(req.body);
        const newinventory = new Inventory(inventorydata);
        try {
            await newinventory.save();

            const resposnseIdata = new resposnse(newinventory.status, newinventory.SKU, newinventory.type, newinventory.pricing, newinventory.metadata);
            res.status(201).json(resposnseIdata);
        } catch (error) {
            res.status(409).json({message:error.message});
        }
    }
    async getinventories (req, res) {
        try {
            const inventory = await Inventory.find();
            const resposnsedata= inventory.map((inventory) => new resposnse(inventory.status, inventory.SKU, inventory.type, inventory.pricing, inventory.metadata));
            res.status(200).json(resposnsedata);
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
            const resposnsedata= new resposnse(inventory.status, inventory.SKU, inventory.type, inventory.pricing, inventory.metadata);
            res.status(200).json(resposnsedata);
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