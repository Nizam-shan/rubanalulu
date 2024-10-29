import mongoose, { model } from "mongoose";

const PurchaseOrderSchema = new mongoose.Schema({
  orderNo: { type: Number, unique: true, auto: true },
  orderDate: { type: Date, default: Date.now },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "supplierSchema" },
  itemTotal: Number,
  discount: Number,
  netAmount: Number,
  items: [
    {
      itemNo: Number,
      name: String,
      stockUnit: String,
      unitPrice: Number,
      orderQty: Number,
      itemAmount: Number,
      discount: Number,
      netAmount: Number,
    },
  ],
});

export default model("purchaseOrder", PurchaseOrderSchema);
