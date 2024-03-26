import mongoose from 'mongoose';
export  async function connectMongo() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);
    console.log('connected with the database');
  } catch (error) {
    console.log(error.message);
  }
}
