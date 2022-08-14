import { Request, Response } from "express";
import { IUserRegistration } from "../interfaces";
import { userService } from "../services";


export async function handleRegistration(req: Request, res: Response) {
    const userData: IUserRegistration = req.body;

    if(userData.name == "" || userData.username == "" || userData.password == "") {
        return res.status(400).json({
            ok: false,
            message: "name, username and password are required"
        });
    }

    const isUserExist = await userService.isUserExist(userData.username)
    if(isUserExist) {
        return res.status(400).json({
            ok: false,
            message: `username ${userData.username} is already taken`
        });
    }

    const user = await userService.create(userData).catch((error) => {
        return res.status(400).json({
            ok: false,
            message: error
        });
    });

    return res.json({
        ok: true,
        data: {
            user: user,
        },
        message: "",
    });
}