import { Hono } from "hono";
import router from "./bff/router";

const app = new Hono().basePath("/api");

app.route('/router', router);

export default app;
