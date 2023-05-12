import ProductManager from "./ProductManager.js";
import { file } from "../config.js";
import path from "path";

export default class CartManager {
  constructor(path) {
    this.ProductManagerC = new ProductManager(path);
    this.cart = [];
    this.inicialize();
  }
  inicialize() {
    this.ProductManagerC.modeproduct = false;
  }
  async addProductCart(cid, pid) {
    let [carts, symbol] = await this.ProductManagerC.getProduct();
    console.log(carts);
    /* Ultima parte revisar */
  }
}
