import mongoose from "mongoose";

export const connectDb = async ()=>{
    mongoose.connect('mongodb://hsc95067:pmvRujAdkG4Y0zXd@ac-sfcaity-shard-00-00.mm5r4pm.mongodb.net:27017,ac-sfcaity-shard-00-01.mm5r4pm.mongodb.net:27017,ac-sfcaity-shard-00-02.mm5r4pm.mongodb.net:27017/FoodDelivery?replicaSet=atlas-f7wqvp-shard-0&ssl=true&authSource=admin').then(()=>{console.log('Db connected')})
}