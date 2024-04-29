import express from "express";
import routes from "./routes/routes.js";
import staticFile from "./middlewares/middlewares.js";
const app = express();
const port = process.env.PORT ?? 1234;

staticFile(app);
app.disable('x-powered-by');
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});