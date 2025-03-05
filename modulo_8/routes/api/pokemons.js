import express from "express";

import Pokemon from "../../models/pokemon.js";

const router = express.Router();

// rota para inserção de um pokemon (método POST)
router.post("/", async (req, res) => {
    try {
        const pokemon = await Pokemon.create(req.body);
        res.status(201).json({
            sucesso: true,
            pokemon: pokemon,
        });
    } catch(e) {
        res.status(422).json({
            sucesso: false,
            erro: e,
        });
    }
});

// rota para a leitura de todos os pokemos (método GET) com a opção de selecionar altura mínima, peso mínimo ou início do nome
router.get("/", async (req, res) => {
            try {
                const filtros = req.query;
                const options = {};
        
                if (filtros.nomeComecaCom) {
                    options.nome = {
                        $regex: filtros.nomeComecaCom + ".*",
                    };
                };

                if (filtros.alturaMinima) {
                    options.altura = {
                        $gte: filtros.alturaMinima, 
                    };
                };

                if (filtros.pesoMinimo) {
                    options.peso = {
                        $gte: filtros.pesoMinimo,
                    };
                };
        
                const pokemons = await Pokemon.find(options);
                res.status(200).json({
                    sucesso: true,
                    pokemons: pokemons,
                })
            } catch(e) {
                res.status(500).json({
                    sucesso: false,
                    erro: e,
                })
            }
});

// rota para a leitura de um pokemon (método GET)
router.get("/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ _id: req.params.id });
        res.status(200).json({
            sucesso: true,
            pokemon: pokemon,
        })
    } catch(e) {
        res.status(404).json({
            sucesso: false,
            erro: "Pokemon não encontrado!",
        })
    }
});

// rota para atualização dos dados de um pokemon (método PATCH)
router.patch("/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ _id: req.params.id });

        Object.keys(req.body).forEach((atributo) => {
            pokemon[atributo] = req.body[atributo];
        });

        await pokemon.save();

        res.status(200).json({
            sucesso: true,
            pokemon: pokemon,
        })
    } catch(e) {
        res.status(422).json({
            sucesso: false,
            erro: e,
        })
    }
});

// rota para remoção de um pokemon (método DELETE)
router.delete("/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findOneAndDelete({ _id: req.params.id });

        res.status(200).json({
            sucesso: true,
            pokemon: pokemon,
        })
    } catch(e) {
        res.status(404).json({
            sucesso: false,
            erro: "Pokemon não encontrado!",
        })
    }
});

export default router;