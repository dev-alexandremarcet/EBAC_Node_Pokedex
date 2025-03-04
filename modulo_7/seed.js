import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import connect from "./models/index.js";
import Pokemon from "./models/pokemon.js";

const populaBancoDeDados = async () => {
    connect();

    await Pokemon.create({
        id: 784,
        nome: "kommo-o",
        altura: 16,
        peso: 782,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png",
        ataques: "bulletproof, soundproof, overcoat",
        estatisticas: {
            hp: 75,
            attack: 110,
            defense: 125,
            "special-attack": 100,
            "special-defense": 105,
            speed: 85
        }
    });

    await Pokemon.create({
        id: 791,
        nome: "solgaleo",
        altura: 34,
        peso: 2300,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png",
        ataques: "full-metal-body",
        estatisticas: {
            hp: 137,
            attack: 137,
            defense: 107,
            "special-attack": 113,
            "special-defense": 89,
            speed: 97
        }
    });

    await Pokemon.create({
        id: 526,
        nome: "gigalith",
        altura: 17,
        peso: 2600,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png",
        ataques: "sturdy, sand-stream, sand-force",
        estatisticas: {
            hp: 85,
            attack: 135,
            defense: 130,
            "special-attack": 60,
            "special-defense": 80,
            speed: 25
        }
    });

    await Pokemon.create({
        id: 555,
        nome: "darmanitan-standard",
        altura: 13,
        peso: 929,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png",
        ataques: "sheer-force, zen-mode",
        estatisticas: {
            hp: 105,
            attack: 140,
            defense: 55,
            "special-attack": 30,
            "special-defense": 55,
            speed: 95
        }
    });

    await Pokemon.create({
        id: 15,
        nome: "beedrill",
        altura: 10,
        peso: 295,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
        ataques: "swarm, sniper",
        estatisticas: {
            hp: 65,
            attack: 90,
            defense: 40,
            "special-attack": 45,
            "special-defense": 80,
            speed: 75
        }
    });

    await Pokemon.create({
        id: 658,
        nome: "greninja",
        altura: 15,
        peso: 400,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
        ataques: "torrent, protean",
        estatisticas: {
            hp: 72,
            attack: 95,
            defense: 67,
            "special-attack": 103,
            "special-defense": 71,
            speed: 122
        }
    });

    await Pokemon.create({
        id: 646,
        nome: "kyurem",
        altura: 30,
        peso: 3250,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png",
        ataques: "pressure",
        estatisticas: {
            hp: 125,
            attack: 130,
            defense: 90,
            "special-attack": 130,
            "special-defense": 90,
            speed: 95
        }
    });

    await Pokemon.create({
        id: 892,
        nome: "urshifu-single-strike",
        altura: 19,
        peso: 1050,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png",
        ataques: "unseen-fist",
        estatisticas: {
            hp: 100,
            attack: 130,
            defense: 100,
            "special-attack": 63,
            "special-defense": 60,
            speed: 97
        }
    });

    await Pokemon.create({
        id: 148,
        nome: "dragonair",
        altura: 40,
        peso: 165,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
        ataques: "shed-skin, marvel-scale",
        estatisticas: {
            hp: 61,
            attack: 84,
            defense: 65,
            "special-attack": 70,
            "special-defense": 70,
            speed: 70
        }
    });

    await Pokemon.create({
        id: 232,
        nome: "donphan",
        altura: 11,
        peso: 1200,
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png",
        ataques: "sturdy, sand-veil",
        estatisticas: {
            hp: 90,
            attack: 120,
            defense: 120,
            "special-attack": 60,
            "special-defense": 60,
            speed: 50
        }
    });

    await mongoose.disconnect();
};

populaBancoDeDados();