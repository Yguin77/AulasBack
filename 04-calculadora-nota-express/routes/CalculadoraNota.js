const express = require("express");
const router = express.Router();

// Somar
router.get("/somar", (req, res) => {
  const { numA, numB } = req.query;
  res.json({ resultado: Number(numA) + Number(numB) });
});

// Subtrair
router.get("/subtrair", (req, res) => {
  const { numA, numB } = req.query;
  res.json({ resultado: Number(numA) - Number(numB) });
});

// Multiplicar
router.get("/multiplicar", (req, res) => {
  const { numA, numB } = req.query;
  res.json({ resultado: Number(numA) * Number(numB) });
});

// Dividir
router.get("/dividir", (req, res) => {
  const { numA, numB } = req.query;
  if (Number(numB) === 0) {
    return res.status(400).json({ erro: "Divisão por zero não permitida" });
  }
  res.json({ resultado: Number(numA) / Number(numB) });
});

// Ao Quadrado
router.get("/quadrado", (req, res) => {
  const { numA } = req.query;
  res.json({ resultado: Number(numA) ** 2 });
});

// Raiz Quadrada
router.get("/raiz", (req, res) => {
  const { numA } = req.query;
  if (Number(numA) < 0) {
    return res.status(400).json({ erro: "Não é possível calcular raiz quadrada de número negativo" });
  }
  res.json({ resultado: Math.sqrt(Number(numA)) });
});

module.exports = router;
