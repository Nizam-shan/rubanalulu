import { Router } from "express";
import {
  addItem,
  addPurchaseOrder,
  addSupplier,
  getItems,
  getPurchaseOrders,
  getSuppliers,
} from "../controllers/crudController.js";

const router = Router();

router.post("/add_supplier", addSupplier);
router.get("/all_supplier", getSuppliers);
router.post("/add_item", addItem);
router.get("/all_items", getItems);
router.post("/purchase_order", addPurchaseOrder);

router.get("/all_order", getPurchaseOrders);

export default router;
