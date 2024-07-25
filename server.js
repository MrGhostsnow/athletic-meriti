require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
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

const User = mongoose.model("User", UserSchema);

const Projeto = mongoose.model("Projeto", ProjetoSchema);

const Quotacao = mongoose.model("Quotacao", QuotacaoSchema);

// Middleware de autenticação
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized" });
  }
};

// Rotas de login
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Error registering user" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const payload = { username: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.send({ token });
  } catch (error) {
    res.status(500).send({ message: "Error logging in", error });
  }
});

// Rotas protegidas
app.get("/protected", authenticate, (req, res) => {
  res.send({ message: "You are authenticated" });
});

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
