import { API } from "../constans";
import routes from '../api/routes/v1'
import * as express from "express";
import * as compression from 'compression';
import * as cors from 'cors';

export default function expressConfig(app: express.Application) {
    const corsOption = {
        origin: '*',
        credentials: true
    };

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors(corsOption));
    app.use(compression());
    app.use(`/${API}`, routes);

    return app;
}