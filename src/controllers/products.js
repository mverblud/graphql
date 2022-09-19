import ProductsService from "../services/products.js";

export default class productsController {
  constructor() {
    this.productService = new ProductsService();
  }
  async getAll() {
    try {
      const products = await this.productService.getAll();
      return products;
    } catch (err) {
      console.log(err);
    }
  }
  async createProduct(producto) {
    try {
      const productCreated = await this.productService.createProduct(producto);
      return productCreated;
    } catch (err) {
      console.log(err);
    }
  }
  async deleteProduct(id) {
    try {
      const productDeleted = await this.productService.deleteProduct(id);
      return productDeleted;
    } catch (err) {
      console.log(err);
    }
  }
  async updateProduct(id, producto) {
    try {
      const productUpdated = await this.productService.updateProduct(
        id,
        producto
      );
      return productUpdated;
    } catch (err) {
      console.log(err);
    }
  }
}
