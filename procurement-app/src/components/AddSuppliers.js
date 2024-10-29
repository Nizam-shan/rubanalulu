import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { addSupplier } from "../api";

const AddSupplier = () => {
  const [supplier, setSupplier] = useState({
    name: "",
    address: "",
    taxNo: "",
    country: "",
    mobileNo: "",
    email: "",
  });

  const handleChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSupplier(supplier)
        .then((result) => {
          console.log(result);
          window.alert(result.message);
          setSupplier({
            name: "",
            address: "",
            taxNo: "",
            country: "",
            mobileNo: "",
            email: "",
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
        Add Supplier
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="name"
          label="Name"
          onChange={handleChange}
          required
          margin="normal"
          value={supplier.name}
        />
        <TextField
          fullWidth
          name="address"
          label="Address"
          onChange={handleChange}
          required
          value={supplier.address}
          margin="normal"
        />
        <TextField
          fullWidth
          name="taxNo"
          label="Tax Number"
          onChange={handleChange}
          margin="normal"
          value={supplier.taxNo}
        />
        <TextField
          fullWidth
          name="country"
          label="Country"
          onChange={handleChange}
          margin="normal"
          value={supplier.country}
        />
        <TextField
          fullWidth
          name="mobileNo"
          label="Mobile Number"
          onChange={handleChange}
          margin="normal"
          value={supplier.mobileNo}
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          onChange={handleChange}
          required
          margin="normal"
          value={supplier.email}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Supplier
        </Button>
      </form>
    </Paper>
  );
};

export default AddSupplier;
