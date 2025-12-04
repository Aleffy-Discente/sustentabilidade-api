import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());


const tips = [
    {
        id: "1",
        title: "Desligue luzes ao sair",
        summary: "Economize energia apagando luzes quando não estiver no ambiente."
    },
    {
        id: "2",
        title: "Reduza o uso de plástico",
        summary: "Evite embalagens desnecessárias e prefira reutilizáveis."
    },
    {
        id: "3",
        title: "Use água de forma consciente",
        summary: "Banhos curtos ajudam a economizar muitos litros por dia."
    }
];

app.get("/tips", (req, res) => {
    res.json({ data: tips });
});

app.get("/tips/:id", (req, res) => {
    const tip = tips.find(t => t.id === req.params.id);
    if (!tip) return res.status(404).json({ error: "Tip not found" });

    res.json({ data: tip });
});

app.get("/", (req, res) => {
    res.send("API de Dicas Sustentáveis está funcionando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API de Dicas rodando na porta ${PORT}`);
});
