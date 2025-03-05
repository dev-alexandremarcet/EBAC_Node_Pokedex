import mongoose from "mongoose";

const { Schema } = mongoose;

const pokemonSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    altura: {
        type: Number,
        required: true,
        min: 0,
    },
    peso: {
        type: Number,
        required: true,
        min: 0,
    },
    imagem: {
        type: String,
        required: true,
        validate: {
            validator: (valor) => {
                return valor && valor.startsWith("http");
            },
            message: () => "A imagem deve ser uma url absoluta!"
        }
    },
    ataques: {
        type: String,
        required: true,
    },
    estatisticas: {
        type: Object,
        required:true,
    },
    jogos: [
        {
            type: String,
        }
    ]
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;
