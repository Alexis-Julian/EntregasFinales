import express from "express";
import { app as RouteProduct } from "./routes/product.js";
import { app as RouteCart } from "./routes/cart.js";
import morgan from "morgan";

export default (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use("/api/products", RouteProduct);
  app.use("/api/carts", RouteCart);
  app.use(express.urlencoded({ extended: true }));
};
