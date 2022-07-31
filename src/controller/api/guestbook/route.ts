import { Router } from "express";
import * as controller from "../../guestbook/controller"

const router = Router();
router.post("/save", controller.handleFormSave);
router.get("/delete", controller.deleteHandler);

export { router };