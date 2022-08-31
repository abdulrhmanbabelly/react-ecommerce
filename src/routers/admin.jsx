import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  NotFound,
  AdminCartsTable,
  AdminCategoriesTable,
  AdminUsersTable,
  AdminProductsTable,
} from "../Pages";

let AdminRouter = () => {
  return (
    <Routes>
      <Route path="/products" exact element={<AdminProductsTable />} />
      <Route path="/users" exact element={<AdminUsersTable />} />
      <Route path="/categories" exact element={<AdminCategoriesTable />} />
      <Route path="/carts" exact element={<AdminCartsTable />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdminRouter;
