import { Router } from "express";
import * as controller from "../guestbook/controller"

const router = Router();
router.get("/", controller.listHandler);
router.get("/form", controller.formHandler);

export { router };