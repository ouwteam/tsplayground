import { Request, Response } from "express";
import { Messages } from "../../entities/messages";
import { User } from "../../entities/user";
import { twing } from "../../lib/twing";

export async function formHandler(req: Request, res: Response) {
    const user = await User.findByPk(1);
    const output = await twing.render("guestbook/form.twig", {
        user: user,
    });

    res.send(output);
}

export async function listHandler(req: Request, res: Response) {
    const messages = await Messages.findAll({
        include: [
            {
                model: User.scope("noPassword"),
                as: "user",
            },
        ]
    });

    const output = await twing.render("guestbook/list.twig", {
        messages: messages,
    });
    res.send(output);
}

export async function deleteHandler(req: Request, res: Response) {
    const message_id = req.query.id?.toString() ?? "";

    const message = await Messages.findByPk(message_id);
    if (message == null) {
        throw "Guestbook not found";
    }

    try {
        await message.destroy();
    } catch (error) {
        return res.json({
            ok: false,
            message: error
        });
    }

    return res.json({
        ok: true,
        message: "Deleted"
    });
}

export async function handleFormSave(req: Request, res: Response) {
    const post = req.body;
    var message: Messages;

    console.log({
        u: req.body,
        user_id: post.user_id,
        message_content: post.message,
        message_type: "text",
    });

    try {
        message = await Messages.create({
            user_id: post.user_id,
            message_content: post.message,
            message_type: "text",
        });
    } catch (error) {
        console.error(error);

        return res.status(400).json({
            ok: false,
            message: "Error"
        });
    }

    res.json({
        ok: true,
        data: {
            message: message
        },
        message: "Guestbook saved"
    });
}