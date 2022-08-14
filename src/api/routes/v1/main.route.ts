import { Request, Response, Router } from "express";

const route = Router();

route.get("/", (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: "server up",
    });
});

export default route;