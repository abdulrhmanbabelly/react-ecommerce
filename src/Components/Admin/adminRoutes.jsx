import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminCategoriesTable from './Tables/adminCategoriesTable';
import AdminProductsTable from './Tables/adminProductsTable';
import AdminUsersTable from './Tables/adminUsersTable';
import AdminCartsTable from './Tables/adminCartsTable';

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