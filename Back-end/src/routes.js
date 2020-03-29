const express = require('express');
const routes = express.Router();
const ongs = require("./controller/ongController");
const casos = require("./controller/casosController");
const profile = require("./controller/profileController");
const sessao = require("./controller/sessaoController");
const connection = require("./database/connection");
 
//ongs
routes.post("/ongs", ongs.create);
routes.get("/ongs", ongs.list);

//Perfil
routes.get("/profile", profile.list);

// Sessão
routes.post("/sessao", sessao.login);

//casos
routes.post("/casos", casos.create); 
routes.get("/casos", casos.list);
routes.delete("/casos/:id", casos.remove);

module.exports = routes;