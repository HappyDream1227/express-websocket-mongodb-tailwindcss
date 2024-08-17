import mongoose from "mongoose";
// const uri2 = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URI}`
const uri = `mongodb://admin:admin@192.168.140.186:27017/test1?authSource=admin`

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('mongodb connected'));
    mongoose.connection.on('open', () => console.log('mongodb open'));
    mongoose.connection.on('disconnected', () => console.log('mongodb disconnected'));
    mongoose.connection.on('reconnected', () => console.log('mongodb reconnected'));
    mongoose.connection.on('disconnecting', () => console.log('mongodb disconnecting'));
    mongoose.connection.on('close', () => console.log('mongodb close'));

    await mongoose.connect(uri)
  } catch (error) {
    console.log("db connection error :\n", error);
    process.exit(1);
  }
}



export default connectDB;