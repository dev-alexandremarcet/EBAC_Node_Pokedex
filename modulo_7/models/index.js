import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MondoDB Conectado...");
    }
    catch (err) {
        console.log("Houve um erro ao se conectar ao MongoDB!", err);
    }
};

export default connect;
