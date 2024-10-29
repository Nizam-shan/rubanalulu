import Joi from "joi";
import { sendResponse } from "../helpers/Response.js";
import suppliersSchema from "../models/suppliers.schema.js";
import itemsSchema from "../models/items.schema.js";
import purchaseSchema from "../models/purchase.schema.js";

const supplierValidation = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Supplier name is required" }),
  address: Joi.string().required(),
  taxNo: Joi.number(),
  country: Joi.string().required(),
  mobileNo: Joi.number().required(),
  email: Joi.string().email().required(),
  status: Joi.string().valid("Active", "Inactive", "Blocked").default("Active"),
});

const generateRandomNumber = () => {
  const min = 1000; // Minimum value
  const max = 9999; // Maximum value
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addSupplier = async (req, res) => {
  try {
    const { error } = supplierValidation.validate(req.body);
    if (error) return sendResponse(res, 400, null, error.details[0].message);
    const rn = generateRandomNumber();
    const newSupplier = new suppliersSchema({ ...req.body, supplierNo: rn });
    await newSupplier.save();
    return sendResponse(res, 201, newSupplier, "Supplier added successfully");
  } catch (err) {
    return sendResponse(res, 500, null, err.message);
  }
};

export const getSuppliers = async (req, res) => {
  try {
    const suppliers = await suppliersSchema.find();
    return sendResponse(res, 200, suppliers, "Suppliers fetched successfully");
  } catch (err) {
    return sendResponse(res, 500, null, err.message);
  }
};

const itemValidation = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  brand: Joi.string().required(),
  category: Joi.string().required(),
  supplier: Joi.string().required(),
  stockUnit: Joi.string().required(),
  unitPrice: Joi.number().required(),
  images: Joi.array().items(Joi.string()),
  status: Joi.string().valid("Enabled", "Disabled").default("Enabled"),
});

export const addItem = async (req, res) => {
  try {
    const { error } = itemValidation.validate(req.body);
    if (error) return sendResponse(res, 400, null, error.details[0].message);

    const randomItemNo = await generateRandomNumber();
    const newItem = new itemsSchema({ ...req.body, itemNo: randomItemNo });
    await newItem.save();
    return sendResponse(res, 201, newItem, "Item added successfully");
  } catch (err) {
    return sendResponse(res, 500, null, err.message);
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await itemsSchema.find();
    return sendResponse(res, 200, items, "Items fetched successfully");
  } catch (err) {
    return sendResponse(res, 500, null, err.message);
  }
};

const purchaseOrderValidation = Joi.object({
  orderDate: Joi.date().default(Date.now),
  supplier: Joi.string()
    .required()
    .messages({ "any.required": "Supplier is required" }),
  itemTotal: Joi.number()
    .required()
    .messages({ "any.required": "Item total is required" }),
  discount: Joi.number().min(0).default(0),
  netAmount: Joi.number()
    .required()
    .messages({ "any.required": "Net amount is required" }),
  items: Joi.array()
    .items(
      Joi.object({
        itemNo: Joi.number().required(),
        name: Joi.string().required(),
        stockUnit: Joi.string().required(),
        unitPrice: Joi.number().required(),
        orderQty: Joi.number().integer().min(1).required(),
        itemAmount: Joi.number().required(),
        discount: Joi.number().min(0).default(0),
        netAmount: Joi.number().required(),
      })
    )
    .min(1)
    .required(),
});

export const addPurchaseOrder = async (req, res) => {
  try {
    const { error } = purchaseOrderValidation.validate(req.body);
    if (error) return sendResponse(res, 400, null, error.details[0].message);

    const randomItemNo = await generateRandomNumber();
    const newPurchaseOrder = new purchaseSchema({
      ...req.body,
      orderNo: randomItemNo,
    });
    await newPurchaseOrder.save();
    return sendResponse(
      res,
      201,
      newPurchaseOrder,
      "Purchase order added successfully"
    );
  } catch (err) {
    return sendResponse(res, 500, null, err.message);
  }
};

export const getPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = await purchaseSchema.find();
    // .populate("supplierSchema", "name");
    return sendResponse(
      res,
      200,
      purchaseOrders,
      "Fetched all purchase orders successfully"
    );
  } catch (err) {
    return sendResponse(res, 500, null, err.message);
  }
};
