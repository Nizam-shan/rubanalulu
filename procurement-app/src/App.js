import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AddSupplier from "./components/AddSupplier";
import AddItem from "./components/AddItem";
import PurchaseOrders from "./components/PurchaseOrders";
import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddSupplier from "./components/AddSuppliers";

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Procurement Application
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add-supplier">
            Add Supplier
          </Button>
          <Button color="inherit" component={Link} to="/add-item">
            Add Item
          </Button>
          <Button color="inherit" component={Link} to="/purchase-orders">
            Purchase Orders
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Routes>
          <Route
            path="/"
            element={
              <Typography variant="h4" gutterBottom>
                Welcome to the Procurement Application
              </Typography>
            }
          />
          <Route path="/add-supplier" element={<AddSupplier />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/purchase-orders" element={<PurchaseOrders />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
