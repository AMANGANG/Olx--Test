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
    static getinventory=async (req, res) =>{
        try {
            const inventory = await Inventory.find();
            res.status(200).json(inventory);
        } catch (error) {
            res.status(404).json({message:error.message});
        }
    }
    static getinventorybyid=async (req, res) =>{
        const {id} = req.params;
        try {
            const inventory = await Inventory.findById(id);
            res.status(200).json(inventory);
        } catch (error) {
            res.status(404).json({message:error.message});
        }
    }
}
export default Createinventory;