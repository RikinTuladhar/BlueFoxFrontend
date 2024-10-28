const { Schema, models, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Product = models.Product || model("Product", productSchema);
export default Product;
