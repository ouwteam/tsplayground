import { Router } from "express";
import * as guestBookRoute from "./guestbook/route";

const routes: Router = Router();
routes.use("/guestbook", guestBookRoute.router);

export { routes };