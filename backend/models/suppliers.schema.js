import mongoose, { model } from "mongoose";

const SupplierSchema = new mongoose.Schema({
  supplierNo: { type: Number, unique: true, auto: true },
  name: String,
  address: String,
  taxNo: String,
  country: String,
  mobileNo: String,
  email: String,
  status: {
    type: String,
    enum: ["Active", "Inactive", "Blocked"],
    default: "Active",
  },
});

export default model("supplierSchema", SupplierSchema);
