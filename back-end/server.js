import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";

const port = process.env.PORT || 5005;
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`server is running on port ${port}`));
