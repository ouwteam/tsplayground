import { Application } from "express";
import { Server } from "net";
import { syncDB } from "./config";
import { PORT } from "./constans";
import { createServer } from "./server";

export function startServer(): Server {
    const app: Application = createServer();

    return app.listen(PORT, async () => {
        await syncDB();
        console.log(`Server is listening on port ${PORT}`);
    });
}

startServer();
