import mongoose, { Document, Schema } from 'mongoose';

export interface NewUser extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    
    password: { 
        type: String, 
        required: true 
    },
});

export const User = mongoose.model<NewUser>('User', UserSchema);
