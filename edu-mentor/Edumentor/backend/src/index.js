const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parse = require('parse/node');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Configurar Parse
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/';

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:5001' // Atualize para o URL do seu frontend
}));
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const { celular, email, nomeUsuario, nomeCompleto } = req.body;

  const FormData = Parse.Object.extend("FormData");
  const formData = new FormData();

  formData.set("celular", celular);
  formData.set("email", email);
  formData.set("nomeUsuario", nomeUsuario);
  formData.set("nomeCompleto", nomeCompleto);

  try {
    const savedData = await formData.save();
    res.status(201).send({ message: 'Dados recebidos com sucesso', data: savedData });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao salvar dados', error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
