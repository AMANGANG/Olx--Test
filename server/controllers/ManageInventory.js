import InventoryData from "./InventoryData.js";
import Inventory from "../models/InventoryDataSchema.js";

class ManageInventory {
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
    static updateinventory=async (req, res) =>{
        const {id} = req.params;
        const inventorydata= new InventoryData(req.body);
        try {
            await Inventory.findByIdAndUpdate(id, inventorydata);
            res.status(200).json({message:"Inventory updated successfully"});
        } catch (error) {
            res.status(404).json({message:error.message});
        }
    }
    static deleteinventory=async (req, res) =>{
        const {id} = req.params;
        try {
            await Inventory.findByIdAndDelete(id);
            res.json({message:"Inventory Deleted Successfully"});
        } catch (error) {
            res.status(404).json({message:error.message});
        }
    }
}
export default ManageInventory;