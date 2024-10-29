import mongoose, { model } from "mongoose";

const ItemSchema = new mongoose.Schema({
  itemNo: { type: Number, unique: true, auto: true },
  name: String,
  location: String,
  brand: String,
  category: String,
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "supplierSchema" },
  stockUnit: String,
  unitPrice: Number,
  images: [String],
  status: { type: String, enum: ["Enabled", "Disabled"], default: "Enabled" },
});

export default model("item", ItemSchema);
