import express from "express";

import BuscaInfoPokemon from "../../services/buscaPokemon.js";
import Pokemon from "../../models/pokemon.js";

const router = express.Router();

router.post("/captura/:id", (req, res) => {
    BuscaInfoPokemon(req.params.id).then((pokemon) => {
        let numeroAleatorio = Math.random();
        const pokemonFoiCapturado = numeroAleatorio <= 0.5;
        //console.log("Rota /captura/:id", pokemon.id," - Passou por aqui!", numeroAleatorio);
        if (pokemonFoiCapturado) {
            Pokemon.create(pokemon).then((pokemonCapturado) => {
                res.json({
                    capturado: true,
                    id: pokemonCapturado._id
                });
            }).catch(e => res.status(500).json({erro: e}));
        } else {
            window.location.reload();
        };
    }).catch(_ => res.status(404).json({erro: "Pokemon não encontrado!"}));
});

export default router;