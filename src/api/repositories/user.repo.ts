import { IUserRegistration } from "../interfaces";
import { User } from "../models";

export async function create(param: IUserRegistration) {
    try {
        const user = await User.create({
            name: param.name,
            username: param.username,
            password: param.password,
        });

        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create user");
    }
}

export async function deleteUser(user_id: number) {
    try {
        const user = await User.findByPk(user_id);
        if (user == null) {
            throw "User not found";
        }

        user?.destroy();
    } catch (error) {
        console.error(error);
        throw error;
    }

    return true;
}

export async function isUserExist(username: string) {
    const user = await User.findOne({ where: { username: username } });
    return user != null;
}

export async function findAll() {
    return await User.findAll();
}