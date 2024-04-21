import sinon from 'sinon';
import Inventory from '../models/InventoryDataSchema.js';
import ManageInventory from '../controllers/ManageInventory.js';


describe('ManageInventory', function() {
  describe('createinventory', function() {
    it('should save new inventory', async function() {
      const manageinventory = new ManageInventory();
      const mockInventory = sinon.mock(Inventory.prototype);
      mockInventory.expects('save').once();
      
      const req = Requestdata();

      const res = Responsedata();
      
      
      await manageinventory.createinventory(req, res);
      
      mockInventory.verify();
      mockInventory.restore();
      
    });
  });
});

describe('ManageInventory', function() {
  describe('getinventories', function() {
    it('should get all inventories', async function() {
      const manageinventory = new ManageInventory();
      const mockInventory = sinon.mock(Inventory);
      mockInventory.expects('find').once().resolves([]);
      
      const req = {};
      const res = Responsedata();
      
      await manageinventory.getinventories(req, res);
      
      mockInventory.verify();
      mockInventory.restore();
    });
  });
});
function Responsedata() {
  return {
    status: function () {
      return this;
    },
    json: function () { }
  };
}

function Requestdata() {
  const newLocal = {
    body: {
      status: 'Created',
      sku: '12345',
      type: 'Car',
      primarystatus: 'Available',
      primarylocation: 'Warehouse A',
      attributes: {
        VIN: '1HGCM82633A123456',
        make: 'Honda',
        model: 'Accord',
        trim: 'EX',
        year: 2023
      },
      pricing: {
        cost: 20000,
        sellingPrice: 25000
      },
      metadata: {}
    }
  };
  const req = newLocal;
  return req;
}

