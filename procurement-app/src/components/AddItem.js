import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { addItem } from "../api";

const AddItem = () => {
  const [item, setItem] = useState({
    name: "",
    location: "",
    brand: "",
    category: "",
    supplier: "",
    stockUnit: "",
    unitPrice: "",
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addItem(item)
        .then((result) => {
          console.log(result);
          window.alert(result.message);
          setItem({
            name: "",
            location: "",
            brand: "",
            category: "",
            supplier: "",
            stockUnit: "",
            unitPrice: "",
          });
        })
        .catch((error) => {
          console.error("Error adding supplier:", error);
          window.alert("Failed to add supplier");
        });
    } catch (error) {
      console.error("Error adding supplier:", error);
      window.alert("Failed to add supplier");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px", marginBottom: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Add Item
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="name"
          label="Item Name"
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          name="location"
          label="Location"
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          name="brand"
          label="Brand"
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          name="category"
          label="Category"
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          name="supplier"
          label="Supplier ID"
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          name="stockUnit"
          label="Stock Unit"
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          type="number"
          name="unitPrice"
          label="Unit Price"
          onChange={handleChange}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Item
        </Button>
      </form>
    </Paper>
  );
};

export default AddItem;
