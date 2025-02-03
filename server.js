const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Yhdistetään MongoDB:hen
mongoose.connect("mongodb+srv://paskapunttis:Puntissa;Paskaa;666@paskapunttiscluster.vs5hi.mongodb.net/?retryWrites=true&w=majority&appName=PaskaPunttisCluster", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Luo tietomalli jäsenille
const JasenSchema = new mongoose.Schema({
    etunimi: String,
    sukunimi: String,
    osoite: String,
    puhelinnumero: String,
    syntymavuosi: Number,
    mistaKuulit: String,
});

const Jasen = mongoose.model("Jasen", JasenSchema);

// Lomaketietojen tallennus
app.post("/api/jasenet", async (req, res) => {
    try {
        const uusiJasen = new Jasen(req.body);
        await uusiJasen.save();
        res.status(201).json({ message: "Jäsen tallennettu onnistuneesti!" });
    } catch (error) {
        res.status(500).json({ message: "Virhe tallennuksessa", error });
    }
});

// Palvelin käynnistyy
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Palvelin käynnissä portissa ${PORT}`));
