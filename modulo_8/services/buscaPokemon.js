import axios from "axios";

const BuscaInfoPokemon = (PokemonId) => {
    return new Promise( async (resolve, reject) => {
        const url = process.env.POKEAPI_URL + PokemonId;

        try {
            const resultado = await axios.get(url);

            const data = resultado.data;

            const id = data.id;
            const nome = data.name;
            const altura = data.height;
            const peso = data.weight;
            const imagem = data.sprites.other["official-artwork"].front_default;
            const ataques = data.abilities.map(a => a.ability.name).join(", ");

            const estatisticas = {};

            data.stats.forEach((estatistica => {
                estatisticas[estatistica.stat.name] = estatistica.base_stat; 
            }));

            const jogos = [];
            let i = 0;
            data.game_indices.forEach((gameIndice => {
                jogos[i] = gameIndice.version.name;
                i = i + 1;
            }));

            resolve({
                id: id,
                nome: nome,
                altura: altura,
                peso: peso,
                imagem: imagem,
                ataques: ataques,
                estatisticas: estatisticas,
                jogos: jogos,
            });
        } catch (e) {
            reject(e);
        }
    });
};

export default BuscaInfoPokemon;