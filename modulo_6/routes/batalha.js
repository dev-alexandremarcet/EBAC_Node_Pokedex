import express from "express";
import BuscaInfoPokemon from "../services/buscaPokemon.js";

const router = express.Router();

router.get("/", (_, res) => {
    const pokemonIdRandomico = Math.round(Math.random() * 904 + 1);

    BuscaInfoPokemon(pokemonIdRandomico).then(pokemon => {
        res.render("paginas/batalha/index", {
            pokemon: pokemon,
        });
    });
});

export default router;
