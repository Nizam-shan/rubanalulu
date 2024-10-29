const API_URL = "http://localhost:5000"; // Replace with your backend API URL

export const addSupplier = async (supplierData) => {
  const response = await fetch(`${API_URL}/add_supplier`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(supplierData),
  });
  return response.json();
};

export const addItem = async (itemData) => {
  const response = await fetch(`${API_URL}/add_item`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  });
  return response.json();
};

export const getPurchaseOrders = async () => {
  const response = await fetch(`${API_URL}/all_order`);
  return response.json();
};
