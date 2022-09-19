import ProductsDao from "../persistencia/dao/productsDao.js";
export default class ProductsService {
  constructor() {
    this.productsDao = new ProductsDao();
  }
  async getAll() {
    const products = await this.productsDao.findAllProducts();
    return products;
  }
  async createProduct(producto) {
    const productCreated = await this.productsDao.createOneProduct(producto);
    return productCreated;
  }
  async deleteProduct(id) {
    const productDeleted = await this.productsDao.deleteOneProduct(id);
    return productDeleted;
  }
  async updateProduct(id, producto) {
    const productUpdated = await this.productsDao.updateOneProduct(
      id,
      producto
    );
    return productUpdated;
  }
}
