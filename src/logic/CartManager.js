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
    let [product] = pid;
    const [cart] = await this.ProductManagerC.getProduct();
    cart.map((e) => {
      if (e.id == cid) {
        if (e.products.length > 0) {
          e.products.map((p) => {
            if (p.id == product.id) {
              p = { ...p, quantity: (p.quantity += 1) };
            } else {
              e.products.push({ id: product.id, quantity: 1 });
            }
          });
        } else {
          e.products.push({ id: product.id, quantity: 1 });
        }
      }
    });
    this.ProductManagerC.writeFile(cart);
  }
}
