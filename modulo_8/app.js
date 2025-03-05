import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import connect from "./models/index.js";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import createError from "http-errors";

import pokemonRouter from "./routes/pokemons.js";
import batalhaRouter from "./routes/batalha.js";
import apiRouter from "./routes/api/index.js";

const app = express();
const porta = 3000;

app.set("views", path.join("./", "views"));
app.set("view engine", "ejs");

app.use(expressLayouts);

app.use(express.static(path.join("./", "public")));

app.use("/pokemons", pokemonRouter);
app.use("/batalha", batalhaRouter);

app.use("/api", apiRouter);

app.use((_req, _res, next) => {
    next(createError(404));
});

app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    res.render("paginas/erro", {
        mensagem: err.message,
        erro: err,
    });
});

app.listen(porta, () => {
    connect();
    console.log("Servidor ouvindo na porta ", porta);
});
