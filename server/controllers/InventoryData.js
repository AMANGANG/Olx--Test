import { v4 as uuidv4 } from 'uuid';
class InventoryData {
    constructor({ status, type, primarystatus, primarylocation, attributes, pricing, metadata, SKU }) {
        this.SKU = SKU || uuidv4(); 
        this.type = type;
        this.status = status;
        this.primarystatus = primarystatus;
        this.primarylocation = primarylocation;
        this.attributes = attributes;
        this.pricing = pricing;
        this.metadata = metadata;
    }
}
export default InventoryData;