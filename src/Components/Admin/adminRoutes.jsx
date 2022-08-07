import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminCartsTable, AdminUsersTable, AdminCategoriesTable, AdminProductsTable } from '../';

let AdminRoutes = () => {
    
    return (
    <Routes>
        <Route path='/products' exact element={<AdminProductsTable/>} />
        <Route path='/users' exact element={<AdminUsersTable/>} />
        <Route path='/categories' exact element={<AdminCategoriesTable/>} />
        <Route path='/carts' exact element={<AdminCartsTable />} />
    </Routes>
    )
}

export default AdminRoutes;