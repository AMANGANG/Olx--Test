import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  Status:{
     type: String,
     default:"Created"
     
  },
  SKU: {
    type: String,
    
  },
  type: {
    type: String,
    
  },
  primaryStatus: {
    type: String,
    
  },
  primaryLocation: {
    type: String,
    
  },
  attributes: {
    VIN: {
      type: String,
      required: true
    },
    make: String,
    model: String,
    trim: String,
    year: Number
  },
  pricing: {
    cost: {
      type: Number,
      required: true
    },
    sellingPrice: {
      type: Number,
      required: true
    }
  },
  metadata: {
    createdAt: {
      type: Date,
      default: Date.now
    },
    lastUpdatedAt: {
      type: Date,
      default: Date.now
    },
    
    }
  }
);

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;