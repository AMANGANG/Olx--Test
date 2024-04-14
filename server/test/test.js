import sinon from 'sinon';
import Inventory from '../models/InventoryDataSchema.js';
import ManageInventory from '../controllers/ManageInventory.js';


describe('ManageInventory', function() {
  describe('createinventory', function() {
    it('should save new inventory', async function() {
      const mockInventory = sinon.mock(Inventory.prototype);
      mockInventory.expects('save').once();
      //Arrange
      const req = {
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

      const res = {
        status: function() {
          return this;
        },
        json: function() {}
      };
      //Act
      await ManageInventory.createinventory(req, res);
      //Assert
      mockInventory.verify();
      mockInventory.restore();
      
    });
  });
});

describe('ManageInventory', function() {
  describe('deleteInventory', function() {
    it('should delete inventory', async function() {
      const mockInventory = sinon.mock(Inventory);
      mockInventory.expects('findByIdAndDelete').once();

      const req = {
        params: {
          id: '661770ea097c95f03296f907'
        }
      };

      const res = {
        json: function() {}
      };

      await ManageInventory.deleteinventory(req, res);

      mockInventory.verify();
      mockInventory.restore();
    });
  });
});