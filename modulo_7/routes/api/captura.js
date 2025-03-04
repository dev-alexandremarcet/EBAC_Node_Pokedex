import express from "express";

import BuscaInfoPokemon from "../../services/buscaPokemon.js";
import Pokemon from "../../models/pokemon.js";

const router = express.Router();

router.post("/captura/:id", async (req, res) => {
    try {
        const pokemon = await BuscaInfoPokemon(req.params.id);
        let numeroAleatorio = Math.random();
        const pokemonFoiCapturado = numeroAleatorio <= 0.4;
        if (pokemonFoiCapturado) {
            try {
                const pokemonCapturado = await Pokemon.create(pokemon);

                res.json({
                    capturado: true,
                    id: pokemonCapturado._id
                });
            } catch (e) {
                res.status(500).json({erro: e});
            };
        } else {
            window.location.reload();
        };
    } catch (_e) {
        res.status(404).json({erro: "Pokemon não encontrado!"});
    };
});

export default router;