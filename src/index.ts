import express, { Express } from 'express';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import * as guestBookRoute from "./controller/guestbook/route";
import * as apiRoutes from "./controller/api/routes";
import { sequelizeInstance } from './lib/database';

dotenv.config();
sequelizeInstance.sync();

// app.get('/', async (req: Request, res: Response) => {
//   const output = await twing.render("index.twig", { message: req.query.message });
//   res.send(output);
// });

const app: Express = express();
app.use(bodyParser.json());
app.use("/api", apiRoutes.routes);
app.use("/", guestBookRoute.router);

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
