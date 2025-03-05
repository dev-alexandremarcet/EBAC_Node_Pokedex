import express from "express";
import BuscaInfoPokemon from "../services/buscaPokemon.js";

const router = express.Router();

router.get("/", async (_, res) => {
    const pokemonIdRandomico = Math.round(Math.random() * 904 + 1);

    try {
        const pokemon = await BuscaInfoPokemon(pokemonIdRandomico);

        res.render("paginas/batalha/index", {
            pokemon: pokemon,
        });
    } catch (_e) {
        res.status(404).json({erro: "Pokemon não encontrado!"});
    }
});

export default router;
