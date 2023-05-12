import express from "express";
import { app as RouteProduct } from "./routes/product.js";
import morgan from "morgan";

export default (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use("/api/products", RouteProduct);
  app.use(express.urlencoded({ extended: true }));
};
