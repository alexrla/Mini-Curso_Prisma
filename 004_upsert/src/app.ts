import express from "express";
import { convertCLTToPJ } from "./controllers/calculator-controller.js";
import { listAll, insert } from "./controllers/jobs-controller.js";

const server = express();
server.use(express.json()); // Tratando dados em JSON (middleware do Express)

server.get("/health", (req, res) => {
  res.send("Foi!!!");
});

server.get("/calculator", convertCLTToPJ);
server.get("/jobs", listAll);
server.post("/insertJob", insert);

server.listen(4000, () => {
  console.log("Executando...");
});
