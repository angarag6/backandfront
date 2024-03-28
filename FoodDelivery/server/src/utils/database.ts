import  mongoose  from "mongoose";

const connectDatabase = async()=> {
    try {
    const MONGODB_URL = process.env.DB_URL || '';
    await mongoose.connect(MONGODB_URL);
    console.log('Database connections is successful');}
    catch(error:unknown){
         throw new Error('Database cannot connected',);
    }
}
export {connectDatabase};
    