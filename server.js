const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexão com o MongoDB
mongoose
  .connect("mongodb://localhost:27017/projetos")
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB", err);
  });

// Modelo do Projeto
const ProjetoSchema = new mongoose.Schema({
  proponente: { type: String, required: true },
  fonteDeRecursos: { type: String, required: true },
  valorDoProjeto: { type: Number, required: true },
  status: { type: String, required: true },
  inicio: { type: Date, required: true },
  fim: { type: Date, required: true },
  local: { type: String, required: true },
  numeroDeBeneficiarios: { type: Number, required: true },
  modalidadeEManifestacao: { type: String, required: true },
  empresasParceiras: { type: String },
  descricao: { type: String, required: true },
  imagem: { type: String },
  type: { type: String },
});

const QuotacaoSchema = new mongoose.Schema({
  proponente: { type: String, required: true },
  valorDoProjeto: { type: Number, required: true },
  status: { type: String, required: true },
  inicio: { type: Date, required: true },
  fim: { type: Date, required: true },
  descricao: { type: String, required: true },
  type: { type: String },
});

const Projeto = mongoose.model("Projeto", ProjetoSchema);

const Quotacao = mongoose.model("Quotacao", QuotacaoSchema);

// Rotas
app.get("/projetos", async (req, res) => {
  const projetos = await Projeto.find();
  res.send(projetos);
});

app.post("/projetos", async (req, res) => {
  const projeto = new Projeto(req.body);
  await projeto.save();
  res.send(projeto);
});

app.put("/projetos/:id", async (req, res) => {
  const projeto = await Projeto.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(projeto);
});

app.delete("/projetos/:id", async (req, res) => {
  await Projeto.findByIdAndDelete(req.params.id);
  res.send({ message: "Projeto removido" });
});

// Rotas de Cotação

app.get("/quotacoes", async (req, res) => {
  const projetos = await Quotacao.find();
  res.send(projetos);
});

app.post("/quotacoes", async (req, res) => {
  const projeto = new Quotacao(req.body);
  await projeto.save();
  res.send(projeto);
});

app.put("/quotacoes/:id", async (req, res) => {
  const projeto = await Quotacao.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(projeto);
});

app.delete("/quotacoes/:id", async (req, res) => {
  await Quotacao.findByIdAndDelete(req.params.id);
  res.send({ message: "Projeto removido" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
