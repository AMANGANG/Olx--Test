import sinon from 'sinon';
import Inventory from '../models/InventoryDataSchema.js';
import Createinventory from '../controllers/CreateInventory.js';


describe('Createinventory', function() {
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
      await Createinventory.createinventory(req, res);
      //Assert
      mockInventory.verify();
      mockInventory.restore();
      
    });
  });
});