import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El Nombre es obligatorio']
    },
    descripcion: { type: String },
    codigo: { type: String },
    img: {
      type: String,
      default: ''
    },
    precio: {
      type: Number,
      default: 0
    },
    stock: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: true
  }
);

export default model("productos", productSchema);
