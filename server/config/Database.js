import mongoose from "mongoose";

const connectDataBase = async () => {
    
        const conn = await mongoose.connect("mongodb+srv://lcs2020049:gangwaraman@cluster0.aigp7lm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        if(conn){
            console.log(`MongoDB Connected`);
        }
        
    
};

export default connectDataBase;