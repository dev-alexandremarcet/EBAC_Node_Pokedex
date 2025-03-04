import express from "express";

import Pokemon from "../models/pokemon.js";

const router = express.Router();

router.get("/", (_, res) => {
    Pokemon.find().then((pokemons) => {
        pokemons.forEach(pokemon => {
            const dataIso = pokemon._id.getTimestamp().toISOString();
            const dataInfo = dataIso.split("T")[0];
            const dataEmPartes = dataInfo.split("-");

            pokemon.capturadoEm = `${dataEmPartes[2]}/${dataEmPartes[1]}/${dataEmPartes[0]}`;
        });

        res.render("paginas/pokemons/index", {
            pokemons: pokemons,
        });
    });
});

router.get("/:id", (req, res) => {
    Pokemon.findOne({ _id: req.params.id }).then(pokemon => {
        res.render("paginas/pokemons/partials/poke-info", {
            pokemon: pokemon,
            message: req.query.message,
        });
    }).catch(e => {
        res.status(404).render("paginas/erro", {
            mensagem: "Pokemon não encontrado!",
            erro: {},
        })
    });
});

export default router;