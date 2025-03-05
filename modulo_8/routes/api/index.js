import express from "express";
import cors from "cors";

import capturaRouter from "./captura.js";
import statusRouter from "./status.js";
import pokemonsRouter from "./pokemons.js";

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
}

const router = express.Router();

router.use(express.json());

router.use("/captura", cors(corsOptions), capturaRouter);
router.use("/status", cors(corsOptions), statusRouter);
router.use("/pokemons", cors(corsOptions), pokemonsRouter);

export default router;