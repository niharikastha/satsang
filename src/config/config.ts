import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
    throw new Error('Add the MONGODB_URI inside .env');
}

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to database');
    } catch (error) {
        console.error('Failed to connect to database', error);
    }
};
