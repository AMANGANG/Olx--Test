import express from 'express';
import connectDataBase from './config/Database.js';
import router from './routes/InventoryPath.js';

const app = express();
const PORT = 3000;
app.use(express.json());
connectDataBase();
app.get('/', (req, res) => {
    res.send('Hello World');
    }); 
app.use("/",router)
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    });   

