import React, { useEffect, useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { getPurchaseOrders } from "../api";

const PurchaseOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const result = await getPurchaseOrders();
      setOrders(result.data); // Adjust based on your response structure
    };
    fetchOrders();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6" gutterBottom>
        Purchase Orders
      </Typography>
      <List>
        {orders.map((order) => (
          <ListItem key={order.orderNo}>
            <ListItemText
              primary={`Order No: ${order.orderNo || "NA"}`}
              secondary={`Supplier: ${order.supplierName || "NA"} | Total: ${
                order.netAmount
              }`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default PurchaseOrders;
