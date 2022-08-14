import { IUserRegistration } from '../interfaces';
import { userRepo } from '../repositories';

export async function findAll() {
    const users = await userRepo.findAll();
    return users;
}

export async function create(param: IUserRegistration) {
    const user = await userRepo.create(param);
    return user;
}

export async function deleteUser(user_id: number) {
    const ok = await userRepo.deleteUser(user_id);
    return ok;
}

export async function isUserExist(username:string) {
    const isExists = await userRepo.isUserExist(username);
    return isExists;
}