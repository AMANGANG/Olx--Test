import InventoryData from "./InventoryData.js";
import Inventory from "../models/InventoryDataSchema.js";

class Createinventory {
    static createinventory=async (req, res) =>{
        const inventorydata= new InventoryData(req.body);
        const newinventory = new Inventory(inventorydata);
        try {
            await newinventory.save();
            res.status(201).json(newinventory);
        } catch (error) {
            res.status(409).json({message:error.message});
        }
    }
}
export default Createinventory;