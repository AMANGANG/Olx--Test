
class InventoryData {
    constructor({ status,sku, type,primarystatus,primarylocation, attributes, pricing, metadata }) {
        this.sku = sku;
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