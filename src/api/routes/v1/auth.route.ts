import { Request, Response, Router } from "express";
import { userController } from "../../controllers";

const route = Router();

route.post("/registration", (req: Request, res: Response) => {
    userController.handleRegistration(req, res);
});

export default route;