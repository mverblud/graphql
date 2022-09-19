export const typeDef = `
type Query {
    getAllProducts: [Product]
}
type Mutation {
    addProduct(input: ProductInput): Product
    deleteProduct(id: ID!): Product
    updateProduct(id: ID!, input: ProductInput): Product
}
type Product {
    _id: ID
    nombre: String
    descripcion: String
    codigo: String
    img: String
    precio: Float
    stock: Int
}
input ProductInput {
    nombre: String
    descripcion: String
    codigo: String
    img: String
    precio: Float
    stock: Int
}




`;
