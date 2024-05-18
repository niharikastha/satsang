import { User, NewUser } from './user.model';

export const createUser = async (user: NewUser): Promise<NewUser> => {
    const newUser = new User(user);
    return await newUser.save();
};

export const getUsers = async (): Promise<NewUser[]> => {
    return await User.find();
};

export const getUserById = async (id: string): Promise<NewUser | null> => {
    return await User.findById(id);
};

export const updateUser = async (id: string, user: Partial<NewUser>): Promise<NewUser | null> => {
    return await User.findByIdAndUpdate(id, user, { new: true });
};

export const deleteUserById = async (id: string): Promise<NewUser | null> => {
    return await User.findByIdAndDelete(id);
};
