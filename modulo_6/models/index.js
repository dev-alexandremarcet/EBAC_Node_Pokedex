import mongoose from "mongoose";

const connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/pokedex").then(() => {
        console.log("MondoDB Conectado...");
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao MongoDB!", err);
    });
};

export default connect;
