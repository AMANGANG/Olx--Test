
import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  Status:{
     type: String,
     Enumerator:["Created","Procured","Sold"],
     default:"Created"
     
  },
  SKU: {
    type: String,
    required: true,
    maxlength:5
  },
  type: {
    type: String,
    required: true,
    Enumerator:["Car","Bike","Truck"]
  },
  primaryStatus: {
    type: String,
    required: true,
    Enumerator:["Available","Not Available"]
  },
  primaryLocation: {
    type: String,
    required: true
  },
  attributes: {
    VIN: {
      type: String,
      required: true
    },
    make: String,
    model: String,
    trim: String,
    year: {
        type: Number,
        required: true,
        validate(value){
            if(value<2020 && value>2025){
                throw new Error("Year should be greater than 2020 and less than 2025");
            }
        }
    }
    

  },
  pricing: {
    cost: {
      type: Number,
      required: true,
      validate(value){
          if(value<0){
              throw new Error("Cost should be greater than 0");
          }
      }
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
